---
title: 星露谷安装Mod教程
date: 2025-03-20 15:05:04
author: 
categories: [游戏]
tags: [steam, 星露谷物语, Mod]
cover: https://stardewvalley.net/wp-content/uploads/2017/12/sdv_divider.png
---

## 一、安装 SMAPI（Mod 加载器）

### 下载 SMAPI
- PC
  {% link 'SMAPI' 'GitHub下载，选择 SMAPI 4.1.10 installer (for players).zip 下载' 'https://github.com/Pathoschild/SMAPI/releases/tag/4.1.10' %}
  {% link 'SMAPI' 'nexus下载，需要N网账号' 'https://www.nexusmods.com/stardewvalley/mods/2400' %}
- Android
  {% link 'SMAPI' 'SMAPI For Android' 'https://github.com/NRTnarathip/SMAPILoader/releases/tag/1.1.4' %}

### 解压文件
将压缩包解压到非系统盘（如 D 盘），避免权限问题。建议路径：D:\StardewValley\SMAPI。

### 运行安装脚本
1. 打开解压后的文件夹，双击运行 install on Windows.bat。
2. 命令行界面提示：
   - 输入 1 并回车（选择默认游戏路径）。
   - 再次输入 1 确认安装。
3. 安装完成后会显示 SMAPI installed successfully!，并自动复制 SMAPI 启动路径（如 "D:\Steam\steamapps\common\Stardew Valley\StardewModdingAPI.exe" %command%）。

## 二、配置 Steam 启动项
1. 打开 Steam ，右键点击游戏库中的 《星露谷物语》 → 属性 → 通用 → 启动选项。
2. 粘贴复制的 SMAPI 路径到输入框，保存设置。
![Steam启动项设置](https://cdn.img2ipfs.com/ipfs/QmbEPaUquPaFE6TcGQCXYaqQyyBgmLUWoEuBzPXn9E2CAq?filename=2025-03-20.png)

## 三、注册 Nexus Mods 账号
1. 访问 {% link 'Nexus Mods官网' 'Nexus Mods' 'https://www.nexusmods.com/' %}
2. 点击右上角 Register，填写邮箱、用户名、密码完成注册。
3. 登录后，在 Site Preferences → Content Blocking 中关闭成人内容过滤（避免部分 Mod 被隐藏）。

## 四、下载并安装 Mod
1. 下载 Mod
   - 以热门的 “自动化” Mod（Automate） 为例：
   {% link 'Automate下载页' 'Nexus Mods' 'https://www.nexusmods.com/stardewvalley/mods/1063' %}
   - 点击 Files → Manual Download 下载文件（通常为 .zip 格式）。
2. 安装 Mod
   - PC
     - 解压下载的 Mod 文件，将整个文件夹复制到：你的游戏目录/Stardew Valley/Mods
     - 示例路径：D:\Steam\steamapps\common\Stardew Valley\Mods
   - Android
     - 路径一般为：Android/data/com.chucklefish.stardewvalley/files/Mods
>如果 Mods 文件夹不存在，手动创建。
{% fold '检查依赖项' open %}
- 大部分 Mod 需要额外依赖库
- 安装方式同上，确保依赖库位于 Mods 文件夹内。
{% endfold %}

## 五、验证 Mod 是否生效
1. 通过 Steam 启动游戏，会自动运行 SMAPI。
2. 游戏启动时，命令行窗口会显示加载的 Mod 列表。
   - 显示绿色 Loaded 表示成功，红色 Failed 表示失败。
3. 进入游戏后，按 U 键（部分 Mod 快捷键）测试功能。

## 六、常见问题
- Mod 未加载
  - 检查 Mod 文件夹层级：正确路径应为 Mods/Mod 名称/模组文件，而非嵌套多层。
  - 确保所有依赖项已安装。

- 游戏崩溃
   - 删除近期新增的 Mod，排查冲突。
   - 查看 Mods/ErrorLogs 中的日志文件定位问题。

- Mod 过期
   - 定期在 Nexus Mods 检查更新，关注 Mod 页面的 Posts 板块获取兼容性通知。

- Mod 兼容
  - 检查Mod是否兼容1.6版本，或删除冲突Mod。

## 七、推荐工具
Mod 管理工具：
{% link 'Stardrop' 'Mod管理器' 'https://github.com/Stardrop/Stardrop/releases' %}
可自动检测缺失依赖和 Mod 更新。

> 按照以上步骤操作，即可畅玩星露谷物语的 Mod 内容！遇到问题可查阅 SMAPI 官方文档 或社区论坛。
