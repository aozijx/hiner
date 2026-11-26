---
title: Minecraft Java 服务器搭建与配置指南（Ubuntu / WSL）
date: 2025-10-28 22:32:55
author:
categories:
tags:
cover: https://www.minecraft.net/content/dam/minecraftnet/games/minecraft/screenshots/1.21-new-trial-chambers-patterns.jpg
---
## 更新软件包列表并升级现有软件
```bash
sudo apt update
```
## 安装 Java 运行环境
本文以 Minecraft 1.21.1 为基准，需要 **Java 21**：
```bash
sudo apt install openjdk-21-jre-headless -y
```
> **版本对应**：1.20.5 – 1.21.x 需要 Java 21；**26.x 起需要 Java 25**（`openjdk-25-jre-headless`，发行版软件源没有时可用 Adoptium/Temurin 源安装）。Java 版本低于要求时服务器会直接启动失败。
## 创建服务器目录
用于存放服务器文件，创建后进入该目录：
```bash
mkdir ~/minecraft-server
cd ~/minecraft-server
```
## 下载 1.21.1 服务器 JAR
```bash
wget https://piston-data.mojang.com/v1/objects/59353fb40c36d304f2035d51e7d6e6baa98dc05c/server.jar
```
**关于 JAR 文件名**：

| 版本 | 官方下载文件名 | 官方推荐启动命令 |
|---|---|---|
| 1.21.x 及更早 | `server.jar` | `java -Xmx4G -Xms4G -jar server.jar nogui` |
| **26.x 起** | `minecraft_server.<版本>.jar` | `java -Xmx4G -Xms4G -jar minecraft_server.26.3.jar nogui` |

文件名本身没有约束，只要 `-jar` 后面的名称与实际文件一致即可；为简洁起见，下文统一使用 `server.jar`。

**其他获取方式**：
- 官方下载页：https://www.minecraft.net/zh-hans/download/server
- 版本清单（含各版本 JAR 直链）：https://piston-meta.mojang.com/mc/game/version_manifest_v2.json
- 第三方归档：https://antmmmmm.github.io/
## 接受 EULA 协议
运行服务器前必须同意 Mojang 的最终用户许可协议（EULA）：
```bash
echo "eula=true" > eula.txt
```
## 初次运行以生成配置文件
```bash
java -Xmx1024M -Xms1024M -jar server.jar nogui
```
- `-Xmx1024M`：最大堆内存 1GB，按机器配置调整（如 `-Xmx4096M` 表示 4GB）。
- `-Xms1024M`：启动时初始堆内存，通常与 `-Xmx` 保持一致。
- `-jar server.jar`：指定要运行的 JAR；26.x 需换成 `minecraft_server.<版本>.jar`。
- `nogui`：不启用图形界面，节省资源。

首次启动会生成 `server.properties`、`world/`、`logs/` 等文件。日志出现 `Done` 即表示启动成功；先输入 `stop` 关服，再按需修改配置。

## 创建启动脚本
```bash
echo -e "#!/bin/bash\ncd ~/minecraft-server\njava -Xmx1024M -Xms1024M -jar server.jar nogui" > start.sh
chmod +x start.sh
```
## 启动服务器
```bash
./start.sh
```
日志末尾出现 `Done (x.xxxs)!` 表示启动完成。客户端通过“多人游戏 → 添加服务器”连接 `<服务器 IP>:25565`（默认端口）。

两项最常用的配置（改完需重启生效）：
- `motd`：玩家在服务器列表中看到的描述。
- `online-mode`：`true` 校验正版账号；`false` 跳过 Mojang 验证，任何人都能用任意 ID 登录，**建议只在测试或内网环境使用**，公网开启存在账号冒用风险。

## server.properties 配置详解（以 1.21.1 为基准）
> 文件位于服务器根目录。**修改后必须重启服务器**——`/reload` 只重载数据包和函数，不会重读 `server.properties`。

### 完整键值参考
> 1.21.1 是本文档编写时的参考版本。后续版本废弃、新增或将部分键迁移到 gamerule，详见每行末尾的版本标注。

```properties
# Minecraft server properties（1.21.1 基准）
accepts-transfers=false               # [v1.20.5+ 新增] 是否接受其他服务器通过 /transfer 传来的玩家连接；仅在多服联动场景设为 true
allow-flight=false                   # 是否允许飞行，false 时生存模式飞行会被踢出
allow-nether=true                    # [v1.21.9 废弃 → gamerule allowEnteringNetherUsingPortals] 是否允许通过下界传送门进入下界
broadcast-console-to-ops=true        # 是否向在线管理员广播控制台命令输出
broadcast-rcon-to-ops=true           # 是否向在线管理员广播 RCON 命令输出
bug-report-link=                     # [v1.21.1+] 服务器 Bug 报告链接，显示在客户端"服务器问题"按钮
difficulty=easy                      # 游戏难度（peaceful / easy / normal / hard）
enable-command-block=false           # [v1.21.9 废弃 → gamerule commandBlocksEnabled] 是否允许命令方块执行
enable-jmx-monitoring=false          # 是否启用 JMX 监控（Java 管理接口）
enable-query=false                   # 是否启用 GameSpy4 查询协议（第三方服务器列表工具用）
enable-rcon=false                    # 是否启用 RCON 远程控制台
enable-status=true                   # 是否让服务器出现在服务器列表中（关闭后仍可直连但显示离线）
enforce-secure-profile=true          # [v1.19+] 是否强制玩家使用 Mojang 签名的聊天密钥；1.19 默认 false，**1.19.1 起默认 true**；Geyser/Bedrock 桥接服务器需设 false
enforce-whitelist=false              # 是否强制白名单（从 whitelist.json 移除的在线玩家立即踢出）
entity-broadcast-range-percentage=100 # 实体广播范围百分比（10-1000），越低客户端看到远处实体越少、网络压力越小
force-gamemode=false                 # 是否强制每次加入都重置为 gamemode 指定的游戏模式
function-permission-level=2          # /function 和命令方块内命令的**最低**权限等级门槛（1-4，默认 2）
gamemode=survival                    # 默认游戏模式（survival / creative / adventure / spectator）
generate-structures=true             # 是否生成村庄、要塞等结构
generator-settings={}                 # 自定义世界生成器 JSON（默认 {} 即使用原版默认）
hardcore=false                       # 是否极限模式（死亡变旁观、难度锁定 hard）
hide-online-players=false            # [v1.18+] 是否在服务器列表中隐藏玩家昵称（只显示数量）
initial-disabled-packs=              # 初次创建世界时自动禁用的数据包名称（逗号分隔）
initial-enabled-packs=vanilla        # 初次创建世界时自动启用的数据包名称（逗号分隔）
level-name=world                     # 世界文件夹名称
level-seed=                          # 世界种子（空为随机；支持数字和字符串）
level-type=minecraft:normal          # 世界类型（1.19+ 起使用命名空间 ID 格式）
log-ips=true                         # [v1.20.2+] 是否在日志中记录玩家 IP
max-chained-neighbor-updates=1000000 # 限制单次 tick 内连续邻居更新次数，用于防止红石 TNT 复制等卡服机器；负值禁用
max-players=20                       # 最大同时在线玩家数
max-tick-time=60000                  # 单个 tick 最长毫秒数，超时服务器看门狗会强制关闭；设 -1 禁用
max-world-size=29999984             # 世界半径上限（方块数），即 59999968 边
motd=A Minecraft Server              # 服务器列表中显示的描述（支持 § 颜色代码和 \n 换行）
network-compression-threshold=256    # 数据包多少字节以上启用 zlib 压缩；设 -1 禁用（局域网推荐）
online-mode=true                     # 是否验证正版账号（false 允许任何名称登录；仅反向代理场景设 false）
op-permission-level=4                # /op 新提升的 op 默认等级（1-4，默认 4）。⚠️ 不是"最低 op 等级"；ops.json 里每个玩家可以有独立 level 值
player-idle-timeout=0                # 玩家 idle 超过多少分钟后踢出；0 禁用
prevent-proxy-connections=false      # 是否探测 VPN/代理连接（同步阻塞，现代代理基本绕不过，通常留 false）
pvp=true                             # [v1.21.9 废弃 → gamerule pvp] 是否允许玩家间直接伤害
query.port=25565                     # GameSpy4 查询协议端口（与 server-port 同端口时 UDP 监听）
rate-limit=0                         # 单客户端每秒最大包数，超出踢出；0 禁用
rcon.password=                       # RCON 密码（空密码等于禁用）
rcon.port=25575                      # RCON 监听端口
region-file-compression=deflate      # [v1.20.5+] 区块文件压缩算法（deflate/lz4/none），默认 deflate；lz4 读写更快但体积稍大
require-resource-pack=false          # 是否强制玩家接受服务器资源包
resource-pack=                       # 服务器资源包下载 URL
resource-pack-id=                    # [Paper/Spigot 专有，原版无此键] 资源包 UUID
resource-pack-prompt=                # 拒绝资源包时显示的提示文字
resource-pack-sha1=                  # 资源包 SHA-1 校验值，用于验证下载完整性
server-ip=                           # 绑定的本机 IP（空为绑定所有接口，通常留空）
server-port=25565                    # 监听端口
simulation-distance=10               # [v1.18+] 模拟距离（区块半径）；此范围内 mob 才会 tick、农场才运行
spawn-animals=true                   # [v1.21.2 废弃，无 gamerule 替代] 是否生成被动动物
spawn-monsters=true                  # [v1.21.9 废弃 → gamerule spawnMonsters] 是否生成敌对生物
spawn-npcs=true                      # [v1.21.2 废弃，无 gamerule 替代] 是否生成村民等 NPC
spawn-protection=16                  # 出生点保护半径（方块），公式 2x+1；0 禁用；至少 1 个 op 时才生效
sync-chunk-writes=true               # 是否同步写区块；SSD 推荐 true 防崩溃损坏，HDD 高负载可设 false
text-filtering-config=               # 云文字过滤 JSON 配置路径（空禁用，国内环境用不到；原版 1.21.0+ 存在）
text-filtering-version=0              # 文字过滤配置格式版本（0 或 1；text-filtering-config 为空时此值无意义）
use-native-transport=true            # [Linux 专用] 是否使用 native transport（epoll）性能优化
view-distance=10                     # 视距（区块半径）；仅影响客户端加载/发送的区块
white-list=false                     # 是否启用白名单（白名单在 whitelist.json 中维护）

# ----- 以下为 1.21.2+ 新增的键，1.21.1 原版没有 -----
# pause-when-empty-seconds=60        # [v1.21.2+ 新增] 空服多少秒后暂停 tick loop；Paper 默认 -1（不禁用以兼容插件）
#
# ----- 1.21.11（25w34a/25w35a 快照）新增键 -----
# enable-code-of-conduct=false        # 是否在服务器列表显示社区守则
# management-server-host=localhost    # Java 21 新增的 Management Protocol 监听地址
# management-server-port=0            # Management Protocol 端口（0 = 禁用；启用默认 25585）
# management-server-secret=           # Management Protocol 密钥（随机生成）
# management-server-tls-keystore=     # Management Protocol TLS 密钥库路径
# management-server-tls-keystore-password=   # 密钥库密码
# status-heartbeat-interval=0         # Management Server 心跳间隔（0 = 禁用）
#
# ----- 26.2 新增键 -----
# chat-spam-threshold-seconds=10      # 聊天 spam 踢人阈值（秒数），之前与 commands 共用
# command-spam-threshold-seconds=10    # 命令 spam 踢人阈值（秒数），之前与 chat 共用
```

> **版本迁移小结**（官方来源：Minecraft Wiki / Minecraft.net 官方博客 / PaperMC Docs）：
> - **1.21.2**：废弃 `spawn-animals`、`spawn-npcs`（无 gamerule 替代）；新增 `pause-when-empty-seconds`
> - **1.21.9**：废弃 `allow-nether`、`pvp`、`enable-command-block`、`spawn-monsters`，统一迁移到 gamerule。**注意默认值反转**：
>   - `enable-command-block`（默认 **false**）→ `commandBlocksEnabled`（默认 **true**），升级后命令方块会自动启用！
>   - 其余 3 项默认值方向不变（`pvp` 默认 true → gamerule `pvp` 默认 true）
> - **1.21.10**：配置无变化，同 1.21.9
> - **1.21.11+**：全部 gamerule 改名（驼峰 → snake_case / 语义化），详见下方 gamerule 节
> - **26.2**：新增 `chat-spam-threshold-seconds`、`command-spam-threshold-seconds`（均默认 10），把原来合并的聊天/命令刷屏阈值拆开（来源：官方 26.2 Pre-Release 1 公告）
> - **26.x 起**：版本号改为“年份.序号”格式，需要 **Java 25**；官方下载文件名变为 `minecraft_server.<版本>.jar`

### 场景一：开服前必改的 7 项

| 键 | 建议值 | 说明 |
|---|---|---|
| `motd` | 自定义 | 服务器列表显示的文字，支持 `§` 颜色代码 |
| `difficulty` | `normal` | 影响怪物强度与饥饿消耗；`peaceful` 会清空敌对生物 |
| `gamemode` | `survival` | 新玩家默认模式；配合 `force-gamemode=true` 每次进服强制重置 |
| `max-players` | 按需 | 软上限，超过后显示“服务器已满” |
| `online-mode` | `true` | 改为 `false` 即离线模式，任何人可用任意 ID 进入 |
| `white-list` | 公开服设为 `true` | 只有白名单玩家能进；再开 `enforce-whitelist=true` 会立即踢掉被移除者 |
| `server-port` | `25565` | 改端口后，防火墙和端口转发规则要同步修改 |

### 场景二：配置 OP 与白名单

1. 启动服务器并进入控制台；
2. 执行 `op <玩家名>`，玩家立即获得管理员权限，同时写入 `ops.json`；
3. 执行 `whitelist on` 开启白名单；
4. 执行 `whitelist add <玩家名>` 逐个添加；
5. `whitelist list` 核对名单；手动改过 `whitelist.json` 后用 `whitelist reload` 重新读取。

> `ops.json`、`whitelist.json` 只在启动或显式重载时读取。**手动编辑前先 `stop` 关服**，否则关服时内存数据会覆盖你的修改。

### 场景三：RCON 远程管理

```properties
enable-rcon=true
rcon.port=25575
rcon.password=换成一个强密码
broadcast-rcon-to-ops=true
```

- 开启后可用 mcrcon / rcon-cli 从内网另一台机器执行控制台命令（示例见后文 RCON 小节）；
- **不要把 25575 暴露到公网**，RCON 是明文协议；跨公网请走 SSH 隧道；
- 改完重启才生效。

### 场景四：资源包

```properties
resource-pack=https://example.com/pack.zip
resource-pack-sha1=资源包的40位SHA-1
require-resource-pack=true
resource-pack-prompt=请接受资源包后再进入
```

- 必须是**直链**（点开即下载），对象存储、GitHub Releases 均可；
- `require-resource-pack=true` 时，拒绝下载的玩家会被踢出；
- `resource-pack-sha1` 建议填写，避免客户端拿到损坏或被篡改的包。

### 场景五：性能调优

内存分配（经验值，按人数和插件量调整）：

| 同时在线 | 建议 `-Xmx` |
|---|---|
| 1–5 人 | 2G |
| 6–10 人 | 4G |
| 11–20 人 | 6–8G |

| 键 | 建议 | 说明 |
|---|---|---|
| `view-distance` | 8–10 | 影响客户端视野，调大主要增加带宽 |
| `simulation-distance` | 4–8 | **最影响 CPU**，决定多远范围内的实体和农场继续运行，应优先下调 |
| `entity-broadcast-range-percentage` | 50–100 | 降低可减少远处实体的同步包 |
| `network-compression-threshold` | 256；纯局域网可设 `-1` | `-1` 关闭压缩，省 CPU |
| `max-tick-time` | 60000；卡顿误杀可设 `-1` | 看门狗单 tick 超时阈值 |
| `sync-chunk-writes` | SSD 保持 `true`；HDD 高负载可设 `false` | `false` 写入更快，但崩溃时更易损坏区块 |
| `use-native-transport` | Linux 保持 `true` | 使用 epoll，Linux 下通常更快 |

> 调优顺序：先降 `simulation-distance`，再看 `view-distance`，最后才动压缩和广播范围。

### 场景六：世界生成

- `level-type`：`minecraft:normal`（默认）、`minecraft:flat`（超平坦）、`minecraft:large_biomes`（巨型生物群系）、`minecraft:amplified`（放大化）；
- `level-seed`：留空随机；填数字或字符串可复现同一张地图；
- `generate-structures=false`：不生成村庄、要塞等结构；
- `generator-settings`：超平坦或自定义维度使用的 JSON，普通世界保持 `{}`；
- 世界类型和种子只对**新世界**生效，已有 `world/` 需删除或改用新的 `level-name`。

### 场景七：备份与维护

手动备份（先关自动保存，避免拷到写了一半的区块）：

```bash
save-off
save-all
tar -czf ~/backup-$(date +%F-%H%M).tar.gz ~/minecraft-server/world
save-on
```

用 cron 每天凌晨 4 点自动备份：

```bash
0 4 * * * cd ~/minecraft-server && tar -czf ~/backups/world-$(date +\%F).tar.gz world
```

- 运行中备份至少先执行 `save-all`；
- `logs/` 和 `crash-reports/` 出问题时要保留，排查服务器崩溃时是关键证据。

## 常用 gamerule 命令（原版）
> **权限**：**普通玩家不能执行 `/gamerule`**。需要 **op level 2 及以上**（`function-permission-level=2`，这是原版默认值）。控制台直接输入 `gamerule <规则> <值>` 同样有效且不需要 op。
> **执行位置**：聊天框（带 `/`）**或** 控制台（不带 `/`）都能执行。**不能写进 server.properties**。
> 以下规则名适用于 **Minecraft 1.21.10 及更早版本**（驼峰命名）。**1.21.11+ 规则名整体改为下划线风格**，例如 `keepInventory` → `keep_inventory`，`minecraft:` 前缀可选。

```text
# ========== 原生 gamerule（原版一直存在） ==========

# 世界与自然
/gamerule doDaylightCycle <true|false>     # 是否昼夜交替（1.21.11+ 改为 advance_time）
/gamerule doFireTick <true|false>          # 是否允许火焰蔓延（1.21.11+ 改为 fire_spread_radius_around_player，且从布尔值改为数值 0~128）
/gamerule doMobSpawning <true|false>       # 是否自然生成被动和敌对生物（1.21.11+ 改为 spawn_mobs）
/gamerule doWeatherCycle <true|false>       # 是否天气变化（1.21.11+ 改为 advance_weather）
/gamerule mobGriefing <true|false>         # 苦力怕爆炸/末影人搬方块/僵尸挖门等（1.21.11+ 改为 mob_griefing）
/gamerule keepInventory <true|false>        # 死亡后是否保留物品和经验（1.21.11+ 改为 keep_inventory）
/gamerule spawnRadius <方块数>              # 玩家首次出生/重生的随机半径（1.21.11+ 改为 respawn_radius）

# 实体与性能
/gamerule maxEntityCramming <数值>          # 单个方块可同时容纳的实体数量上限（1.21.11+ 改为 max_entity_cramming）

# 权限与日志
/gamerule commandBlockOutput <true|false>   # 命令方块输出是否显示在聊天栏（1.21.11+ 改为 command_block_output）
/gamerule sendCommandFeedback <true|false>  # 是否在聊天栏显示命令反馈（1.21.11+ 改为 send_command_feedback）
/gamerule logAdminCommands <true|false>    # 是否将管理员命令写入服务器日志（1.21.11+ 改为 log_admin_commands）

# ========== v1.21.9 新增（替代 server.properties 废弃键） ==========
# 以下三条是 v1.21.9 把 server.properties 里的废弃键迁移为 gamerule，**之前版本不存在**

/gamerule allowEnteringNetherUsingPortals <true|false>
    # [v1.21.9+] 是否允许下界传送门（替代废弃的 allow-nether；1.21.11+ 改为同名下划线）
/gamerule spawnMonsters <true|false>
    # [v1.21.9+] 是否生成敌对生物（替代废弃的 spawn-monsters；1.21.11+ 改为 spawn_monsters）
/gamerule pvp <true|false>
    # [v1.21.9+] 是否允许玩家间伤害（替代废弃的 pvp；1.21.11+ 同名不变）
/gamerule commandBlocksEnabled <true|false>
    # [v1.21.9+] 是否允许命令方块执行（替代废弃的 enable-command-block）
    # ⚠️ 默认值反转！废弃前 enable-command-block 默认 false，这里默认 **true**，升级后命令方块会自动启用！
```

> **无 gamerule 替代的 server.properties 废弃键**：`spawn-animals`（1.21.2 废弃）、`spawn-npcs`（1.21.2 废弃）。原版 1.21.11+ 没有对应 gamerule，被动动物和 NPC 的自然生成目前无法通过 gamerule 关闭。

## 原版权限系统（0-4 级）
> Minecraft 原版**没有精细的权限控制**（比如“让张三能 /tp 但不能 /gamemode”），只有 5 个等级，上级自动包含下级所有权限。

**玩家进服时默认是 level 0**（不是 1，也不是 2）。你成为 OP 后等级由 `ops.json` 里的 `level` 决定；控制台 / RCON 永远是 level 4。

| 等级 | 身份 | 能执行的命令举例 |
|---|---|---|
| **0** | 所有玩家（默认） | `/help`、`/me`、`/msg`、`/reply`、`/list`、`/teammsg`、`/trigger` |
| **1** | — | 几乎没有专属命令（主要让玩家能看到调试信息） |
| **2** | 基础管理 | `/gamerule`、`/tp`、`/gamemode`、`/give`、`/kill`、`/time set`、`/weather`、`/difficulty`、`/say`、`/setblock`、`/fill`、`/summon`、`/title`、`/tellraw`、`/spawnpoint`、`/setworldspawn` |
| **3** | 服务器管理 | `/op`、`/deop`、`/ban`、`/kick`、`/whitelist`、`/datapack`、`/tick`、`/debug`、`/banlist` |
| **4** | 服务器所有者 | `/stop`、`/save-all`、`/save-off`、`/save-on`、`/perf`、`/jfr`、`/setidletimeout` |

### 关于"关闭作弊"是否影响 OP
**先澄清**：Java 版**有**"允许作弊"开关，但它是**单人 / 局域网世界**的机制；**专用服务器（本文档的场景）的 server.properties 里没有这个键**。

| 场景 | 开关名称 / 位置 | 权限来源 | 关闭后会影响 OP 吗 |
|---|---|---|---|
| **单人世界** | 创建世界时"允许命令"，或世界选项里再次开启；存于 `level.dat` 的 `allowCommands` | 该开关本身 | 关闭后**所有人（含世界主人）**都不能用命令 |
| **局域网开放** | "对局域网开放"界面的"允许作弊：开/关" | 继承 `level.dat` + 房主授予 op | 关闭时除房主外都不能用命令 |
| **专用服务器** | **不存在** | 只看 `ops.json` 里的 level；控制台/RCON 恒为 4 | 无此开关，OP 不受影响 |

补充两点：
- 基岩版专用服务器的 `allow-cheats=false` 是**另一个东西**，写进 Java 的 server.properties 会被静默忽略。
- 单人世界转成专用服务器后，`level.dat` 里的 `allowCommands` **不再生效**，一切以 `ops.json` 为准。

### 两个容易搞混的配置
- `op-permission-level=4`：你执行 `/op Notch` 时，Notch 被授予的等级。**默认 4**。如果你改成 2，新 op 就只有 level 2，但控制台依然是 4。
- `function-permission-level=2`：**最低门槛**。低于此等级的命令不能在 `/function` 和命令方块里执行。**默认 2**。

### 每个玩家的权限可以不同步
`server.properties` 里的值只是“默认值”。真正存储权限的是 **`ops.json`** 文件，每个玩家可以有独立的 level：
```json
{
  "uuid": "xxx-xxx-xxx",
  "name": "Notch",
  "level": 4,
  "bypassesPlayerLimit": false
}
```
需要精确控制某个人的等级时，**停服后手动改 ops.json**（开着服改会被覆盖）。

### 原版没有的命令（必须装插件/数据包）
以下命令**原版完全不存在**，看到网上教程里的这些命令，都是插件（多为 EssentialsX）或数据包提供的：

| 类别 | 原版没有的命令 | 说明 |
|---|---|---|
| 家与传送 | `/home`、`/sethome`、`/delhome`、`/tpa`、`/tpaccept`、`/tpahere`、`/warp`、`/setwarp`、`/spawn`、`/back` | 原版只有 `/tp`（需坐标或目标玩家，level 2）和 `/spawnpoint`（改重生点，level 2） |
| 物品与生存 | `/kit`、`/repair`、`/heal`、`/feed`、`/fly`、`/god`、`/hat`、`/enderchest`、`/nick` | 原版操作用 `/give`、`/effect`、`/gamemode` 手动实现 |
| 经济与管理 | `/money`、`/pay`、`/balance`、`/shop`、`/invsee`、`/socialspy`、`/afk` | 原版无经济系统，需要插件 |
| 信息类 | `/rules`、`/motd`、`/ping`、`/seen` | 原版只有 `/help`、`/list`、`/seed`（level 2） |

**原版也无法让"非 op 玩家用某个特定命令"**。想让普通玩家用 `/home`、让助手能 `/kick` 但不能 `/ban`，只能用插件：
- **Paper/Spigot** + **LuckPerms**（权限系统）+ **Vault**（权限 API）
- **EssentialsX**（提供 `/home`、`/tpa`、`/warp` 等日常命令）
- 单纯加 `/home`、`/tpa` 也可以只装**数据包**，但权限仍无法细分

## 普通玩家就能用的基础命令
> 下面这些命令**不需要 op**，任何玩家进服（level 0）就能执行。控制台也能执行（不带 `/`）。

```text
/help [页码] [搜索关键字]            # 帮助菜单，列出所有你有权执行的命令；/help gamerule 只列 gamerule 相关
/me <消息>                          # 以第三人称发送聊天消息（如 * Notch 挠了挠头）
/msg <玩家> <消息>                  # 私聊指定玩家；别名 /tell、/whisper
/reply <消息>                       # 回复最近一条私聊；别名 /r
/list [uuids]                       # 列出当前在线玩家；加 uuids 显示 UUID
/teammsg <消息>                     # 给同队玩家发消息；别名 /tm
/trigger <目标选择器> set <数值>     # 触发 objective，需要地图/数据包在记分板里预先创建好
/trigger <目标选择器> add <增量>     # 给记分板加分
/trigger <目标选择器> query          # 查询记分板当前值
```

> 注意：`/advancement`、`/recipe`、`/data`、`/seed` 这些看起来“无害”的命令，在服务器的判定里都是 **level 2**，普通玩家无法使用。

## 常用 OP / 控制台命令（**1.21.1 原版**）
> **权限前提**：**普通玩家不能执行**任何下面的命令。必须满足以下条件之一：
> - 你在服务器**控制台**里直接输入（不需要身份验证，你就是服务器所有者）
> - 你是游戏内的 **OP**，且权限等级满足命令要求（level 2 基础命令 / level 4 管理命令）
> 
> **执行位置约定**：以下命令分两类——
> - **聊天框 & 控制台通用**：带 `/` 前缀，控制台也能识别
> - **仅控制台**：**不带 `/`**，只能在服务器终端里执行，聊天框里打会显示红字报错
> 
> 下方列出的都是 1.21.1 原版高频使用命令。**1.21.11+ 对部分命令的参数做了调整**，已在对应行标注。

### 仅控制台（不带 `/`）
```text
stop                              # 安全关闭服务器（保存世界后退出；务必用这个，别直接 Ctrl+C）
save-all                          # 强制立即保存所有世界数据
save-on                           # 开启自动保存（默认开启）
save-off                          # 临时关闭自动保存（例如给世界备份时）
reload                            # 只重载数据包和函数；server.properties、ops.json 的改动不会被重载，需重启服务器
list                              # 列出当前在线玩家及其数量
```

### 聊天框 & 控制台通用
```text
# --- 服务器广播 ---
/say <消息>                       # 以 [Server] 为前缀向所有玩家广播消息

# --- 权限管理 ---
/op <玩家名>                      # 提升管理员（等同于把玩家写入 ops.json）
/deop <玩家名>                    # 撤销管理员
/whitelist add <玩家名>           # 加入白名单
/whitelist remove <玩家名>        # 移出白名单
/whitelist list                   # 列出所有白名单玩家
/whitelist <on|off>               # 启用/关闭白名单
/whitelist reload                 # 重载 whitelist.json（手动改了文件后用）
/ban <玩家名> [原因]              # 封禁玩家（写入 banned-players.json）
/pardon <玩家名>                  # 解封
/kick <玩家名> [原因]             # 踢出在线玩家
/ban-ip <IP地址> [原因]           # 按 IP 封禁（写入 banned-ips.json）
/pardon-ip <IP地址>               # 按 IP 解封

# --- 玩家管理 ---
/gamemode <survival|creative|adventure|spectator> [玩家名]
    # 切换游戏模式；不写玩家名默认对自己生效
/tp <目标玩家>
    # 传送到目标玩家身边
/tp <玩家> <目标玩家>
    # 把指定玩家传送到目标玩家（op 权限才能跨玩家传送）
/tp <玩家> <x> <y> <z> [yaw] [pitch]
    # 传送到坐标；Y 的合法范围：Overworld -64~320 / Nether 0~127 / End 0~128（1.18+ 起支持负数 Y）
/experience add <玩家> <数量> <levels|points>
    # 给经验；levels = 等级数，points = 经验条点数
/kill [目标]
    # 自杀 / 击杀指定目标（1.21.1+ 支持 /kill @e[type=item] 清掉落物）
/effect <玩家> clear
    # 清掉玩家所有药水效果

# --- 世界管理 ---
/time set <day|noon|night|midnight|0~24000>
    # 设置世界时间；day=1000（早上）、noon=6000、night=13000、midnight=18000、数值=tick
/weather <clear|rain|thunder> [持续秒数]
    # 设置天气；不写持续秒数默认 600 秒
/difficulty <peaceful|easy|normal|hard>
    # 修改游戏难度，立刻生效
/seed
    # 显示当前世界种子（仅 op 可用）
/worldborder set <半径>
    # 设置世界边界半径（方块数）
/worldborder center <x> <z>
    # 移动世界边界中心

# --- 物品与方块（建造/调试常用） ---
/give <玩家> <物品ID> [数量]
    # 直接给物品；物品 ID 带命名空间，如 minecraft:diamond
/clear <玩家> [物品ID] [最大数量]
    # 清空背包，或只清指定物品
/summon <实体ID> [x] [y] [z]
    # 生成实体，如 /summon minecraft:zombie
/setblock <x> <y> <z> <方块ID>
    # 在指定坐标放置单个方块
/fill <x1> <y1> <z1> <x2> <y2> <z2> <方块ID>
    # 用方块填充区域，单次最多 32768 格
/clone <起点> <终点> <目标点>
    # 复制一块区域到另一处
/execute as <目标> at @s run <命令>
    # 以某个实体身份/位置执行命令（现代命令核心，替代旧的 execute 语法）

# --- 世界细节 ---
/spawnpoint [玩家] [x] [y] [z]
    # 设置某个玩家的个人重生点
/setworldspawn [x] [y] [z]
    # 设置整个世界（无个人重生点玩家）的重生点
/forceload add <x1> <z1> <x2> <z2>
    # 强制加载区块，防止远处红石/农场停摆
/title <玩家> <title|subtitle|actionbar> <文本>
    # 在屏幕中央/物品栏上方显示标题
/tellraw <玩家> <JSON文本>
    # 发送富文本消息（支持颜色、点击事件、悬浮提示）
/scoreboard objectives add <名称> <dummy|...>
    # 创建计分板目标，配合 /scoreboard players set 使用
/tag <目标> add <标签>
    # 给实体打标签，便于 @e[tag=xxx] 选择

# --- 数据包 / 函数 ---
/datapack list
    # 列出已加载的数据包
/datapack enable <名称>
    # 启用数据包（原版实现 /home 类功能的另一种方式）
/function <命名空间:路径>
    # 执行数据包里的 .mcfunction 函数

# --- 其他管理 ---
/banlist <players|ips>
    # 查看封禁列表
/transfer <主机名> [端口] [玩家]
    # [v1.20.5+] 把玩家转移到另一台服务器（目标服需 accepts-transfers=true）
/setidletimeout <分钟>
    # 设置挂机踢出时间（level 4）
```

### RCON 远程控制台
如果你在 `server.properties` 中开启了 `enable-rcon=true` 并设置密码，就可以从**另一台机器**远程执行控制台命令：
```bash
# 在本机安装 mcrcon（或用 rcon-cli 等工具）
rcon -H <服务器IP> -P 25575 -p <密码> stop
rcon -H <服务器IP> -P 25575 -p <密码> save-all
```

> **注意**：RCON 通过 TCP 明文传输，生产环境建议只在**内网**使用，或者配合 SSH 隧道。

更多配置项见 [Minecraft Wiki · 服务端配置文件格式](https://zh.minecraft.wiki/w/服务端配置文件格式?variant=zh-cn)。

其他说明：
- 确认防火墙已放行服务器端口（默认 25565）。
- 定期备份世界目录（`world/`），避免数据丢失。

## 让局域网好友加入
服务器默认绑定 `0.0.0.0`（所有接口），普通局域网环境可直接通过 IP 连接；**WSL2 使用 NAT 网络，必须额外做端口转发**。

**获取 WSL2 的 IP 地址**

```bash
ip addr show eth0  # 网卡名不确定时用 ip a 查看
```
找到 `inet` 后面形如 `172.xx.xx.xx` 的地址，即 WSL2 的内部 IP。

**配置端口转发（WSL2 必需）**
WSL2 的 IP 属于 NAT 内网，局域网设备无法直接访问。需在 Windows 上把 25565 转发进去：

```powershell
# 以管理员身份打开 PowerShell
netsh interface portproxy add v4tov4 listenport=25565 listenaddress=0.0.0.0 connectport=25565 connectaddress=172.xx.xx.xx
```
WSL2 每次重启后 IP 可能变化，需要重新执行；可用 `netsh interface portproxy show all` 查看现有规则。

**在 Windows 防火墙中开放端口**
Minecraft 默认使用 25565 端口。
  - 按 Win + R，输入 wf.msc 打开“高级安全 Windows 防火墙”。
  - 在左侧选择“入站规则”，在右侧点击“新建规则...”。
  - 选择“端口”，点击“下一步”。
  - 选择“TCP”，并输入特定本地端口 25565，点击“下一步”。
  - 选择“允许连接”，点击“下一步”。
  - 保持所有网络类型（域、专用、公用）都被选中，点击“下一步”。
  - 为规则起一个名字，例如 “Minecraft WSL Server”，点击“完成”。

**确认服务器绑定所有接口**
`server.properties` 中 `server-ip=` 留空即绑定 `0.0.0.0`（所有接口），官方服务器默认如此。

**测试连接**
- **本机测试**：客户端“多人游戏 → 添加服务器”，地址填 `localhost` 或 WSL2 的内部 IP。
- **局域网测试**：朋友添加服务器时填 **Windows 主机的局域网 IP**（`ipconfig` 中“WLAN / 以太网”下的 IPv4，通常是 `192.168.x.x`），不是 WSL2 的 `172.x` 地址。

