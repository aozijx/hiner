---
title: WSL、Docker 与 Firefox 配置指南
date: 2025-04-02 14:58:47
author: 
categories: []
tags: [Docker, WSL]
cover: /src/img/docker-logo.png
---

在安装 Docker 之前需要了解：Docker 并非通用的虚拟化工具，它依赖已经运行的 Linux 内核环境。
- Docker 是一个开源的应用容器引擎，可以将应用及其依赖打包为可移植的镜像，然后发布到常见的 Linux 或 Windows 机器上，也可以实现虚拟化。
- Docker 一般在 GNU/Linux 系统中运行。其他系统想要部署 Docker 就必须安装一个虚拟的 Linux 环境。
- 虚拟机（VM）的理解和使用也是 Docker 得以运行的先决条件。
- Docker 实质上是在已经运行的 Linux 下制造了一个隔离的文件环境，因此它的执行效率几乎等同于所部署的 Linux 主机。
- 容器使用沙箱机制彼此隔离，容器之间不会直接共享接口。
![](/hiner/src/img/docker.svg)

## 安装 WSL
### 启用 Hyper-V 功能，否则 Docker 等虚拟化工具可能报错
   1. 打开控制面板 -> 程序 -> 程序和功能 -> 启用或关闭 Windows 功能
   2. 勾选 Hyper-V、适用于 Linux 的 Windows 子系统和虚拟机平台。

### 启用适用于 Linux 的 Windows 子系统和虚拟机平台
1. 启用 WSL 功能
   ```powershell
   dism.exe /online /enable-feature /featurename:Microsoft-Windows-Subsystem-Linux /all /norestart
   ```
2. 启用虚拟机平台（WSL 2 必需）
   ```powershell
   dism.exe /online /enable-feature /featurename:VirtualMachinePlatform /all /norestart
   ```
3. 重启计算机
   ```powershell
   shutdown -r -t 0
   ```
4. 安装最新版本 WSL 
   ```powershell
   dism.exe /online /enable-feature /featurename:VirtualMachinePlatform /all /norestart
   ```
5. 设置 WSL 2 为默认版本
   ```powershell
   wsl --set-default-version 2
   ```
6. 安装 Linux 发行版
从 Microsoft Store 安装（如 Ubuntu），或通过命令行：
   ```bash
   wsl --install -d <Distributions Name> 
   ```

- [设置 Linux 用户名和密码](https://learn.microsoft.com/zh-cn/windows/wsl/setup/environment#set-up-your-linux-username-and-password)
请注意，输入密码时屏幕上不会显示任何内容。这是正常的密码隐藏行为，也常被称为盲打。

### 设置 WSL 语言环境
```bash
# 检查当前语言环境
locale

# 如果未设置中文 UTF-8，运行：
sudo apt install language-pack-zh-hans
sudo update-locale LANG=zh_CN.UTF-8

# 重新登录 WSL
exit
wsl  # 重新进入
```

### CPU 漏洞警告
`Speculative Return Stack Overflow: IBPB-extending microcode not applied!`
**原因**：CPU 微码未更新，缺少针对 “推测性返回栈溢出” 漏洞的缓解措施。
**建议**：更新系统微码（`sudo apt install intel-microcode` 或 `sudo apt install amd64-microcode`）。
**解决方案**：
安装 CPU 漏洞修复补丁
  ```bash
  sudo apt update # 在升级或安装新软件包之前，建议始终先运行一次更新软件包索引。
  sudo apt install intel-microcode  # 适用于 Intel 平台
  sudo apt install amd64-microcode # 适用于 AMD 平台
  ```


### 在 GNU/Linux 中安装 Firefox
**下载**：[https://support.mozilla.org](https://support.mozilla.org/zh-CN/kb/install-firefox-linux?redirectslug=%E5%9C%A8Linux%E4%B8%AD%E5%AE%89%E8%A3%85Firefox&redirectlocale=zh-CN)

#### firefox 报错 dxgkio（GPU 加速问题）
```bash
nvidia-smi  # 检查显卡驱动是否安装成功
```
如果出现 `Command 'nvidia-smi' not found`，请检查显卡驱动是否正确安装。
如果没有问题，继续修改 Firefox 的配置。
在 Firefox 地址栏中输入 **about:config**，并承诺小心操作。然后搜索以下首选项，确保它们被设置为 **true**：
- **gfx.webrender.all** - 确保此项为 true。这是启用现代渲染后端的关键。
- **gfx.webrender.compositor.force-enabled** - 设置为 true
- **layers.acceleration.force-enabled** - 设置为 true
- **media.hardware-video-decoding.force-enabled** - 设置为 true（强制启用硬件视频解码）

**注意**：修改后需要完全关闭 Firefox，再重新打开才能生效。

#### GUI 缩放问题
`gtk_widget_set_size_request: assertion 'width >= -1' failed`: 这意味着某个 GUI 组件尝试设置一个无效的宽度（小于 -1），触发了 GTK 的断言错误。
1. 将最有效的配置写入你的 ~/.bashrc 或 ~/.zshrc 文件，这样就不用每次手动设置了。
   ```bash
   echo 'export GDK_SCALE=1' >> ~/.bashrc
   echo 'export GDK_DPI_SCALE=1' >> ~/.bashrc
   source ~/.bashrc
   ```

2. 使用 --class 参数启动 Firefox
有时为 Firefox 创建一个独立的窗口类可以避免与其他应用的设置冲突。
   ```bash
   firefox --class "FirefoxWSL"
   ```

1. 在 Firefox 内部修改配置
在 Firefox 地址栏输入 `about:config`，然后搜索并修改以下选项：
   - `layout.css.devPixelsPerPx` - 将其值改为 1.0 或 1.5 等数字。这个值直接控制 Firefox 自身的缩放比例。1.0 表示 100% 缩放。

#### 安装 Noto 字体
```bash
# Ubuntu/Debian
sudo apt install fonts-noto-cjk  # 包含简体中文、繁体中文、日文、韩文字体
```
#### 安装 WSLg 支持
`** (firefox:16322): WARNING **: 23:55:47.805: Failed to create DBus proxy for org.a11y.Bus: Could not connect: No such file or directory`
Firefox 在尝试连接 DBus（Linux 进程通信服务）时失败，特别是与辅助功能总线（a11y.Bus）相关的部分。在 WSL 环境中，DBus 默认未运行，因此 Firefox 会报错（尽管它仍然可以运行，但某些功能可能受限）。

**解决方案**
1. 安装并启动 DBus
如果某些应用依赖 DBus（如 GNOME 相关工具），可以手动启用：

   ```bash
   # 安装 DBus
   sudo apt install dbus-x11

   # 启动 DBus 服务
   sudo service dbus start

   # 验证是否运行
   ps aux | grep dbus
   ```
2. 调整 DBus 的安全配置
   > 注意：WSL 对 systemd 支持有限，DBus 可能无法自动启动。每次重启 WSL 后，都需要手动运行 `sudo service dbus start`。

   **解决方案**：强制 Firefox 使用 X11 而非 Wayland
   如果使用 WSLg（Windows 11 的 GUI 支持），Firefox 可能默认尝试 Wayland，而 WSLg 的 Wayland 支持不完善：
   ```bash
   # 临时生效
   export MOZ_ENABLE_WAYLAND=0
   firefox

   # 永久生效
   echo "export MOZ_ENABLE_WAYLAND=0" >> ~/.bashrc
   source ~/.bashrc
   ```

## Docker 下载与安装
1. 去官网下载 [Docker](https://www.docker.com)（速度慢自行想办法）
2. **更改默认安装路径**
   软件默认安装 C 盘，如需更改：
   ```bash
   Start-Process -Wait -Filepath "下载的 exe 程序" -ArgumentList "install --installation-dir=D:\Docker"
   ```
   - **汉化**：[https://github.com/asxez/DockerDesktop-CN](https://github.com/asxez/DockerDesktop-CN)
3. **验证安装是否成功**
打开 powershell 或 cmd 并键入
   ```cmd
   docker -v
   docker-compose -v
   ```

{% link 'Docker' '快速入门' 'https://docker.easydoc.net/doc/81170005/cCewZWoN/lTKfePfP' %}

{% link 'microsoft' 'WSL 文档' 'https://learn.microsoft.com/zh-cn/windows/wsl/' %}
{% link 'WSL 文档' '设置 WSL 开发环境' 'https://learn.microsoft.com/zh-cn/windows/wsl/setup/environment' %}
{% link 'WSL 文档' 'Linux 和 Bash 入门' 'https://learn.microsoft.com/zh-cn/windows/wsl/tutorials/linux' %}
{% link 'WSL 文档' 'WSL 的基本命令' 'https://learn.microsoft.com/zh-cn/windows/wsl/basic-commands' %}

