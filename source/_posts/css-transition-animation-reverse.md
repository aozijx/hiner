---
title: CSS transition 与 animation 的反向播放
date: 2025-08-22 21:06:32
author:
categories:
tags:
cover:
---

## 动画倒放
1. transition
   - 过渡效果
   - 只在状态改变时触发
   - 适用于简单的状态变化

2. animation
   - 动画效果
   - 可以在多个状态之间切换
   - 适用于复杂的动画效果

`transition` 可以在状态变化时实现反向过渡；`animation` 则可以通过设置 `direction` 属性实现倒放，例如将其设为 `reverse`。

[stackoverflow](https://stackoverflow.org.cn/questions/16516793)
