---
title: Docker 安装
date: 2025-04-02 14:58:47
author: 
categories: 
tags: 
cover: /src/img/docker-logo.png
---

![](/hiner/src/img/docker.svg)
## 准备
1. Windows 
  开启电脑的功能 Hyper-V 和 适用于 Linux 的 Windows 子系统和虚拟机平台
   1. 打开控制面板 -> 程序 -> 程序和功能 -> 启用或关闭 Windows 功能
   2. Hyper-V 和 适用于 Linux 的 Windows 子系统和虚拟机平台 （勾选）
1. 下载安装
   - 去官网下载 [Docker](https://www.docker.com) 并安装（速度有点慢自行想办法）
   - 软件默认安装 C 盘，如需更改：
   ```bash
   Start-Process -Wait -Filepath "下载的 exe 程序" -ArgumentList "install --installation-dir=D:\Docker"
   ```
   - [汉化](https://github.com/asxez/DockerDesktop-CN?tab=readme-ov-file)

2. 检验成功
打开 CMD 键入
```bash
docker --version
```
输出版本则为成功

{% link 'Docker' '快速入门' 'https://docker.easydoc.net/doc/81170005/cCewZWoN/lTKfePfP' %}
