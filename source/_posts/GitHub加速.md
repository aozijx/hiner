---
title: GitHub 加速
date: 2025-03-15 12:48:50
author:
categories:
tags: [GitHub]
cover: https://cdn.img2ipfs.com/ipfs/QmRV6AphA6xwWo6HeACHmrPHEchiX2681ZL8w2qyXKzdSp?filename=a4f651495c555f42d3b0de0122f914e1.png
---
转载:[Jerry Zhou](https://blog.jerryz.com.cn/article/github-speed-up/)
通过修改系统hosts文件的办法，绕过国内DNS解析，直接访问GitHub的CDN节点，从而达到GitHub访问加速的目的。不需要海外的服务器辅助。
做到以下需要三步：
- 获取 GitHub 官方 CDN 地址
- 修改系统 hosts 文件
- 刷新系统 DNS 缓存
## 获取 GitHub 官方 CDN 地址
```
140.82.121.3  github.com
140.82.121.3  gist.github.com
185.199.110.153 assets-cdn.github.com
185.199.108.133 raw.githubusercontent.com
185.199.111.133 gist.githubusercontent.com
185.199.110.133 cloud.githubusercontent.com
185.199.111.133 camo.githubusercontent.com
185.199.111.133 avatars0.githubusercontent.com
185.199.110.133 avatars1.githubusercontent.com
185.199.111.133 avatars2.githubusercontent.com
185.199.109.133 avatars3.githubusercontent.com
185.199.108.133 avatars4.githubusercontent.com
185.199.111.133 avatars5.githubusercontent.com
185.199.109.133 avatars6.githubusercontent.com
185.199.109.133 avatars7.githubusercontent.com
185.199.110.133 avatars8.githubusercontent.com
185.199.108.133 avatars.githubusercontent.com
185.199.111.154 github.githubassets.com
185.199.109.133 user-images.githubusercontent.com
140.82.112.9 codeload.github.com
185.199.110.133 favicons.githubusercontent.com
192.30.255.116 api.github.com
```
## 修改系统 hosts 文件
打开 C:\Windows\System32\drivers\etc
- 显示隐藏的文件(Win11)
文件资源管理器 - 查看 - 显示 - 隐藏的项目

## 刷新系统 DNS 缓存
- 右击任务栏上的 “开始” 按钮，打开 “Windows 终端（管理员）”
- 在命令行中输入 ipconfig /flushdns 来手动刷新系统 DNS 缓存

