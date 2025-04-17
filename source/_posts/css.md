---
title: CSS 属性
date: 2025-04-16 23:22:52
author:
categories:
tags:
cover: img/default.avif
---
列举一些遇到的，有趣的，方便的 CSS 属性
- filter
  - `drop-shadow();` 沿着元素的不透明部分添加阴影
  - `contrast()` 调整元素对比度（filter 属性）
  - `blur()` 模糊
- transform
  - `skew` 使元素在 2D 平面上倾斜（X/Y 轴）参数：skew(angleX, angleY) 或 skewX(), skewY()
- `mask-image`
  用图片/渐变作为遮罩（显示遮罩非透明区域的内容）
- `mask-size`
  设置遮罩尺寸（类似 background-size）
- `mix-blend-mode`
  混合元素与背景（如 multiply, overlay, screen）
- `conic-gradient()`
  围绕中心点旋转的颜色渐变（适合饼图、色轮）
- animation
  - `alternate` 动画交替反向播放
  - `step` 逐帧动画（如精灵图）
- `animation-play-state`
  控制动画播放状态：running（默认）或 paused（悬停暂停）
- `letter-space、contrast`
  字符间距
- `brightness()` 调整亮度（x=1 为原图，x>1 更亮，x<1 更暗）
- `scale()` 缩放元素（x=1 原大小，x=2 放大两倍）
- `aspect-ratio`
  强制元素保持固定宽高比（常用于视频容器）
