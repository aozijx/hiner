---
title: 星露谷 Mod 安装教程
date: 2025-03-20 15:05:04
author: Hiner
categories: [游戏]
tags: [steam, 星露谷物语, Mod]
cover: https://stardewvalley.net/wp-content/uploads/2017/12/sdv_divider.png
---

## 一、安装 SMAPI（Mod 加载器）
### 下载 SMAPI
- PC: 
  {% link 'SMAPI' 'GitHub，选择 SMAPI 4.1.10 installer.zip 下载' 'https://github.com/Pathoschild/SMAPI/releases/tag/4.2.1' %}
  {% link 'SMAPI' 'nexus，需要N网账号' 'https://www.nexusmods.com/stardewvalley/mods/2400' %}
- Android
  {% link 'SMAPI' 'SMAPI For Android' 'https://github.com/NRTnarathip/SMAPILoader/releases/tag/1.1.4' %}

### 解压文件
将压缩包解压到当前文件夹，避免权限问题，建议路径：D:\StardewValley\SMAPI。

### 运行安装脚本
1. 打开解压后的文件夹，双击运行 install on Windows.bat
2. 命令行界面提示：
   - 输入 1 并回车（选择默认游戏路径）。
   - 再次输入 1 确认安装。
3. 安装完成后会显示 SMAPI installed successfully!，并自动复制 SMAPI 启动路径（如 "D:\Steam\steamapps\common\Stardew Valley\StardewModdingAPI.exe" %command%）。

## 二、配置 Steam 启动项
1. 打开 Steam ，右键点击游戏库中的 《星露谷物语》 → 属性 → 通用 → 启动选项。
2. 粘贴上述命令行的输出路径或者 SMAPI 路径到输入框（加上 %command% 命令），保存设置。
![Steam启动项设置](/hiner/src/img/stardew_valley.png)

## 三、注册 Nexus Mods 账号
1. 访问 {% link 'Nexus Mods官网' 'Nexus Mods' 'https://www.nexusmods.com/' %}
2. 点击右上角 Register，填写邮箱、用户名、密码完成注册。
3. 登录后，在 Site Preferences → Content Blocking 中关闭成人内容过滤（避免部分 Mod 被隐藏）。

## 四、下载并安装 Mod
### 普通 Mod
1. 下载 Mod
   以热门的 “自动化” Mod（Automate） 为例：{% link 'Automate下载页' 'Nexus Mods' 'https://www.nexusmods.com/stardewvalley/mods/1063' %}
   - 点击 Files → Manual Download 下载文件（通常为 .zip 格式）。
2. 安装 Mod
  - 解压下载的 Mod 文件，将解压后的整个文件夹复制到：你的游戏目录 /Stardew Valley/Mods 中(steam 点击游戏管理 -> 浏览本地文件)
> 示例路径：D:\Steam\steamapps\common\Stardew Valley\Mods
> 如果 Mods 文件夹不存在，手动创建。

{% fold '检查依赖项' open %}
- 大部分 Mod 需要额外依赖库
- 安装方式同上，确保依赖库位于 Mods 文件夹内。
{% endfold %}

### 美化 Mod
分为 xnb 和 png 两种格式
- xnb
  解压后复制 Mod 文件夹中 xnb 后缀的文件，打开星露谷 /Stardew Valley/Content/Portraits 文件夹，粘贴并替换，恢复原样只需检查游戏资源完整性即可
- png
> 根据前置 Mod 不同，选择不同方法
  - [Portraiture](https://www.nexusmods.com/stardewvalley/mods/999)
    将 Mod 中包含 PNG 图片的文件夹复制到 /Mods/Portraiture/Portraits 中即可，游戏中按 {% keyboard 'P' %} 切换，{% keyboard 'O' %} 为锁定肖像
  - [PNG Retex Helper](https://www.nexusmods.com/stardewvalley/mods/6340)
    将 Mod 中的 PNG 文件夹复制到 /Mods/PNG Retex Helper/assets 中并替换即可
    实测 **Portraiture** {% keyboard 'P' %} 键可替换 **PNG Retex Helper** 肖像
  - [Fashion Sense](https://www.nexusmods.com/stardewvalley/mods/9969)
    服装等等 Mod 解压到游戏 Mods 文件夹
    在皮埃尔商店购买 Hand Mirror ，您只需使用 Hand Mirror 即可更改 Fashion Sense 配饰、发型、帽子、衬衫、袖子、裤子或鞋子，。自定义服装也可以通过此工具保存和加载。

## 五、验证 Mod 是否生效
1. 通过 Steam 启动游戏，会自动运行 SMAPI。
2. 游戏启动时，命令行窗口会显示加载的 Mod 列表。
   - 白色：Loaded 表示成功。
   - 红色：Failed 表示失败。
   - 紫色：Mod 需要更新（不强制）。

## 六、常见问题
- Mod 未加载
  - 检查 Mod 文件夹层级：正确路径应为 Mods/Mod 名称/模组文件，而非嵌套多层。
  - 确保所有依赖项（前置 Mod）已安装。

- Mod 过期
  - 定期在 Nexus Mods 检查更新，关注 Mod 页面的 Posts 板块获取兼容性通知。

- Mod 兼容
  - 检查Mod是否兼容1.6版本，或删除冲突Mod。

## 七、推荐工具
Mod 管理工具：可自动检测缺失依赖和 Mod 更新。
{% link 'Stardrop' 'Mod管理器' 'https://github.com/Stardrop/Stardrop/releases' %}
Mod 兼容性
{% link 'Mod compatibility' '显示了所有已知的 SMAPI 模组和（不兼容的）内容包' 'https://smapi.io/mods' %}
Mod 故障排查
{% link 'Modding' '玩家指南/故障排除' 'https://stardewvalleywiki.com/Modding:Player_Guide/Troubleshooting' %}
{% link 'SMAPI log parser' '日志解析器' 'https://smapi.io/log' %}
> 按 {% keyboard 'win' %} + {% keyboard 'R' %} 在输入框中键入 **%appdata%\StardewValley\ErrorLogs** ，将日志文件拖入网页输入框即可。

> 按照以上步骤操作，即可畅玩星露谷物语的 Mod 内容！遇到问题可查阅 SMAPI 官方文档 或社区论坛。
{% fold '小技巧' %}
- 可以在已游玩存档的任何时期添加 Mod 
- 遇到“这个角色属于另一位玩家”问题，找到存档，记事本打开，快捷键 {% keyboard 'Ctrl' %} + {% keyboard 'F' %} 寻找 `<farmhand>` ，找到角色名称后向后寻找 `<userID>xxx</userID>` ，意思是只有指定 ID 的玩家可以加入游戏，改成 `<userID />` 。
- 主机位置 `<player>`
- 从机位置 `<farmhand>`
- 房屋代码 `<farmhouse>`
- 房屋等级 `<houseUpgradeLevel>`
- 记录献祭及各种邮件内容 `<mailReceived>`
- 记录看过的情景等等的内容 `<eventsSeen>`
- 记录玩家 ID 识别哪只动物是哪个玩家买的 `<UniqueMultiplayerID>`
{% endfold %}