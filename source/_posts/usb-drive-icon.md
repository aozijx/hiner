---
title: 更改 U 盘图标指南
date: 2025-07-16 15:17:16
author: Hiner
categories: [趣味娱乐]
tags: 
cover: 
---

## 须知
原理是在 U 盘根目录下放置一个图标文件（通常为 `.ico` 格式），并创建一个 inf 文件或 ini 文件来存储配置，进而更改图标。当 U 盘插入电脑时，系统会自动读取这个配置文件，从而显示自定义图标。
大部分 U 盘格式为 exFAT，并且 exFAT 不支持 NTFS 的文件系统属性（如系统文件标记），所以下文使用 attrib 命令的 +s（系统文件）属性无效，又因为 Windows 默认可能禁用自动运行，inf 文件半无效，但仍然可能成功。

![autorun 成功](/hiner/src/img/u-ico.png)

## 准备
需要一张 `.ico` 格式的图片，不能简单地通过修改 JPG 或 PNG 图片的扩展名得到。
- `.ico` 是特殊的容器格式，支持多尺寸、多色深图标（如 16×16、32×32、256×256 等），而 JPG/PNG 是单图层的压缩图像格式。
- ICO 文件至少需要 16x16 和 32x32 尺寸，否则在某些界面（如任务栏）会显示模糊。

**在线转换工具**：
- [icoconverter.com](https://www.icoconverter.com)
- [convertio.co/ico-png](https://convertio.co/ico-png/)

上传图片并下载转换后的 ICO 文件，将图片文件重命名为 `x.ico`，并将其放在 U 盘根目录下。

## 步骤
### 方法一：使用 autorun.inf 文件
1. 在 U 盘根目录下新建一个文本文件，将其重命名为 autorun.inf （注意：文件名必须是这个）。
2. 编辑 autorun.inf 文件，添加以下内容：
```ini
[Autorun]
icon=x.ico
```

3. 保存文件，然后安全弹出 U 盘并重新插入，即可看到图标已经改变。

注意：在某些操作系统中（如 Windows 10 及以上版本），由于安全原因，自动运行功能可能被默认禁用，因此图标可能不会自动更新。此时，我们可以尝试以下方法：
   - 确保图标文件是 `.ico` 格式，并且路径正确。
   - 重启电脑或资源管理器。
   - 在文件夹选项中设置显示图标而不是缩略图。

另外，如果 U 盘已经分区，可能需要在每个分区都进行上述操作。
请注意，使用 autorun.inf 更改图标的方法在现代操作系统中可能不再受支持。由于 autorun.inf 曾被用于传播病毒，微软在后续系统中禁用了 autorun 功能（CD 驱动器除外）。因此，如果上述方法无效，可以尝试另一种方法：

## 方法二：使用 desktop.ini 文件
1. 在 U 盘根目录下新建一个文本文档，重命名为 desktop.ini 。
2. 在 desktop.ini 文件中写入以下内容：
```ini
[.ShellClassInfo]
IconResource=x.ico,0
; [ViewState]   ";" 为注释，不用填写
; Mode=
; Vid=
; FolderType=Generic
```

3. 保存文件，并将 `desktop.ini` 设置为隐藏和系统文件（避免被误删）。
- 按 Win + R 输入 cmd 打开命令提示符。
- 在 U 盘根目录执行命令：
  ```cmd
  attrib +s +h desktop.ini  # 隐藏并设为系统文件
  attrib +s +h custom.ico   # 可选，隐藏图标文件
  ```

4. 将 U 盘安全弹出并重新插入，或在资源管理器按 F5 刷新。

注意：方法二需要确保 U 盘的文件系统是 NTFS（因为 FAT32 不支持文件属性设置）。如果不是，可能需要转换文件系统（注意：转换文件系统可能会清除 U 盘数据，请先备份）。

## 备注
### 刷新资源管理器
```cmd
taskkill /f /im explorer.exe && start explorer
```
### 取消隐藏属性
```cmd
:: 以管理员身份运行CMD
attrib -h -s X:\desktop.ini
attrib -h -s X:\your_icon.ico
```
（X：替换为 U 盘盘符）

### 🌐 exFAT 系统图标兼容性对照表
|操作系统 |	autorun.inf	| desktop.ini |
|------------|---------|----------|
|Windows 10/11 |	❌ 默认禁用|	✅ 需强制刷新 |
|Windows 7/8 |	✅ |	✅ |	✅ |
|macOS   |	❌ |	❌ |
|Linux   |	❌ |	❌ |

### 📜 完整 autorun.inf 配置模板
```ini
[AutoRun]                                   ; 必须的配置段
icon=.\icons\custom.ico                     ; 图标路径（支持相对路径）
label=My Secret Drive                       ; 驱动器显示名称
action=Open Documents                       ; 自动运行提示文本
open=setup.exe                              ; 自动运行程序路径
shell\open=打开(&O)                         ; 右键菜单命令1
shell\open\command=start.exe doc            ; 命令1执行程序
shell\explore=文件管理(&X)                  ; 右键菜单命令2
shell\explore\command=explorer.exe .        ; 命令2执行程序

[Content]                                   ; 媒体类型识别（Win7+）
MusicFiles=false                            ; 禁用音乐文件预览
PictureFiles=false                          ; 禁用图片文件预览
VideoFiles=false                            ; 禁用视频文件预览

[ExclusiveContentPaths]                     ; 指定特殊目录
Private                                     ; 隐藏目录（不显示预览）

[IgnoreContentPaths]                        ; 忽略预览的目录
Backup                                      ; 跳过备份目录
Temp                                        ; 跳过临时目录

; === 高级安全设置 ===
[DeviceInstall]                             ; 驱动程序安装
; CopyFiles=DriverSection                   ; 需要配合[DriverInstall]使用

[DriverInstall]                             ; 驱动程序配置
; CopyFiles=DriverFiles                     ; 需要INF文件支持
```
🔍 参数详解表
| 参数                  | 值示例                 | 作用                          | 系统支持          | 备注                                                                 |
|-----------------------|------------------------|-------------------------------|-------------------|----------------------------------------------------------------------|
| **`icon`**           | `\res\icon.ico`       | 设置驱动器图标                | WinXP - Win11     | 支持相对路径（如 `.\icons\myicon.ico`）                              |
| **`label`**          | `Work Backup`         | 自定义驱动器名称              | 所有 Windows 版本   | 显示在“此电脑”中的名称                                               |
| **`action`**         | `查看相册`            | 自动运行提示文字              | WinXP - Win10     | 插入 U 盘时弹出的提示框文本（需启用自动播放）                          |
| **`open`**           | `autorun\start.exe`   | 指定自动运行程序              | WinXP - Win7      | 需禁用自动播放策略才有效                                             |
| **`shell\verb`**     | `扫描病毒`            | 添加右键菜单自定义项          | Win7+             | `verb`可替换为任意命令名（如 `open`, `scan`）                        |
| **`shell\verb\command`** | `antivirus.exe /scan` | 关联右键菜单的执行命令        | Win7+             | 需与 `shell\verb` 配对使用                                           |
| **`MusicFiles`**     | `true`/`false`        | 启用/禁用音乐文件预览         | Win7+             | 禁用可提升 U 盘打开速度                                                |
| **`PictureFiles`**   | `true`/`false`        | 启用/禁用图片文件预览         | Win7+             | 禁用后缩略图不显示                                                   |
| **`VideoFiles`**     | `true`/`false`        | 启用/禁用视频文件预览         | Win7+             | 影响资源管理器性能                                                   |
| **`shellexecute`**   | （空值）              | 禁用所有自动执行              | Win10/11          | 安全防护关键设置                                                     |
| **`useAutoPlay`**    | `0`/`1`               | 强制关闭/开启自动播放         | Win7+             | 需配合组策略设置                                                     |
| **`NoDriveTypeAutoRun`** | `0x91`               | 通过注册表禁用自动运行        | 所有版本          | 需导入注册表（安全防护）                                             |

⚠️ 安全注意事项
1. 禁用自动运行（防病毒关键）
   ```ini
   [AutoRun]
   shellexecute=                            ; 显式禁用执行
   useautoPlay=0                            ; 关闭自动播放
   ```
2. 阻止恶意代码
   ```ini
   [AutorunDisabled]                        ; 完全禁用自动运行
   NoDriveType=0xFF                         ; 禁止所有类型驱动器自动运行
   ```
