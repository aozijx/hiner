---
title: CSS 动画之 transition 与 animation
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

对于动画的倒放，transition 原生支持
animation 可以使用 direction 属性，设置为 reverse 即可实现倒放效果。应用两个动画即可实现。

[stackoverflow](https://stackoverflow.org.cn/questions/16516793)