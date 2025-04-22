---
title: CSS 属性
date: 2025-04-16 23:22:52
author:
categories:
tags:
cover: img/default.avif
---

# 有趣的 CSS 属性合集

## 一、视觉特效类
### 1. `filter`
- **`drop-shadow()`**  
  沿元素不透明区域生成阴影（比 `box-shadow` 更精准）
- **`contrast()`**  
  调整对比度（`filter: contrast(1.5)`）
- **`blur()`**  
  高斯模糊（`filter: blur(5px)`）
- **`brightness()`**  
  亮度控制（`filter: brightness(0.8)`）

### 2. `mask`
- **`mask-image`**  
  使用图片/渐变作为遮罩（仅显示非透明区域）
- **`mask-size`**  
  控制遮罩尺寸（类似 `background-size`）

### 3. `mix-blend-mode`
混合模式（如 `multiply`, `overlay`, `screen`）

## 3. 3D 
- **`transform-style: preserve-3d;`**
  让子元素在 3D 空间中保持位置（默认是 flat，子元素会被拍平到 2D 平面），必须设置在父容器
---

## 二、变形与动画
### 1. `transform`
- **`skew()`**  
  元素倾斜（`skew(15deg, -5deg)` 或 `skewX(15deg)`与`skewY(-5deg)`）
- **`scale()`**  
  缩放元素（支持 2D/3D）
- **`translate3d()`**  
  三维位移（`translate3d(10px, 20px, 30px)`）
- **`rotate3d()`**  
  三维旋转（`rotate3d(1, 0.5, 0, 45deg)`）
- **`transform-origin`**  
  设置变形原点（`left top`）

### 2. `animation`
- **`alternate`** 动画交替反向播放
- **`animation-play-state`**
  暂停/播放控制（`paused | running`）
- **`steps()`**
  逐帧动画（`animation-timing-function: steps(6)`）

---

## 三、布局与响应式
### 1. 特殊布局
- **`aspect-ratio`**
  强制宽高比（16/9）
- **`shape-outside`**
  文字环绕（circle(50%)）
- **`scroll-snap`**
  滚动对齐（需配合 scroll-snap-type 使用）

### 2. 三维控制
- **`backface-visibility`**
  隐藏元素背面（hidden | visible）

---

## 四、渐变与遮罩
- **`conic-gradient`**
  圆锥渐变（适合色轮/饼图）
  ```css
  /* 圆形 */
  conic-gradient(from 0deg at 50% 50%,#ff0000 0%,#ff007f 8.33%,#ff00ff 16.66%,#7f00ff 25%,#0000ff 33.33%,#007fff 41.66%,#00ffff 50%,#00ff7f 58.33%,#00ff00 66.66%,#7fff00 75%,#ffff00 83.33%,#ff7f00 91.66%,#ff0000 100%);
  /* 扇形 */
  conic-gradient(#f00 0deg 90deg, transparent 90deg 360deg)
  /* 渐变 */
  conic-gradient(#00f, transparent)
  ```
  ```css
  /* 动态饼图 */
  @property --progress {
    syntax: "<angle>";
    inherits: false;
    initial-value: 0deg;
  }

  .pie {
    background: conic-gradient(
      #ff0000 var(--progress),
      transparent var(--progress) 360deg
    );
    transition: --progress 0.5s;
  }
  .pie:hover { --progress: 180deg; }
  ```

---

## 五、排版与细节
### 1. 边框
- **[`outline`](https://developer.mozilla.org/zh-CN/docs/Web/CSS/outline)**
  
### 2. 基本文本和字体样式
- [字体样式](https://developer.mozilla.org/zh-CN/docs/Learn_web_development/Core/Text_styling/Fundamentals)
- **`letter-spacing`**
  字符间距（0.1em）
- **[`text-decoration`](https://developer.mozilla.org/zh-CN/docs/Web/CSS/text-decoration)**
  文本装饰线条
- **[`text-shadow`](https://developer.mozilla.org/zh-CN/docs/Web/CSS/text-shadow)**
  文字阴影（2px 2px 4px rgba(0,0,0,0.5)）

### 3. 交互增强
- **[`cursor`](https://developer.mozilla.org/zh-CN/docs/Web/CSS/cursor)**
  鼠标指针样式（grab, zoom-in）
- **`resize`**
  允许用户调整尺寸（vertical | horizontal）

