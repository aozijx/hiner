---
title: CSS 属性
date: 2025-04-16 23:22:52
author: Hiner
categories: [学习分享]
tags: [CSS]
cover: src/img/mdn_web_docs.png
---

# CSS 属性合集

## 一、视觉特效类
### 1. filter
- **[drop-shadow()](https://developer.mozilla.org/zh-CN/docs/Web/CSS/filter-function/drop-shadow)**  沿元素不透明区域生成阴影
  比 `box-shadow` 更精准，用法同 `box-shadow`
- **[contrast()](https://developer.mozilla.org/zh-CN/docs/Web/CSS/filter-function/contrast)**  增加或减少图像的对比度
  示例：`filter: contrast(1.5);`
- **[blur()](https://developer.mozilla.org/zh-CN/docs/Web/CSS/filter-function/blur)**  高斯模糊
  示例：`filter: blur(5px);`
- **[brightness()](https://developer.mozilla.org/zh-CN/docs/Web/CSS/filter-function/brightness)**   让图像更明亮或更暗淡
  示例：`filter: brightness(0.8);` 默认为 1

### 2. mask
- **[mask-image](https://developer.mozilla.org/zh-CN/docs/Web/CSS/mask-image)**  
  使用图片/渐变作为遮罩（仅显示非透明区域）
- **mask-size**  控制遮罩尺寸
  （类似 `background-size`）

### 3. [mix-blend-mode](https://developer.mozilla.org/zh-CN/docs/Web/CSS/mix-blend-mode)  
混合模式（如 `multiply`, `overlay`, `screen`）

### 4. 3D 
- **[transform-style](https://developer.mozilla.org/zh-CN/docs/Web/CSS/transform-style)**  设置元素的子元素是位于 3D 空间中还是平面中。
  必须设置在父容器（`flat` | `preserve-3d`）
---

## 二、变形与动画
### 1. transform
- **[skew()](https://developer.mozilla.org/zh-CN/docs/Web/CSS/transform-function/skew)**  元素倾斜
  示例：`skew(15deg, -5deg)` 或 skewX(15deg) 与 skewY(-5deg)
- **[scale()](https://developer.mozilla.org/zh-CN/docs/Web/CSS/transform-function/scale)**  元素缩放
  可以在不同的方向设置不同的缩放值（支持 2D/3D）
- **[translate3d()](https://developer.mozilla.org/zh-CN/docs/Web/CSS/transform-function/translate3d)**  三维位移
  示例：`translate3d(10px, 20px, 30px)`
- **[rotate3d()](https://developer.mozilla.org/zh-CN/docs/Web/CSS/transform-function/rotate3d)**  三维旋转
  示例：`rotate3d(1, 0.5, 0, 45deg)`
- **[transform-origin](https://developer.mozilla.org/zh-CN/docs/Web/CSS/transform-origin)**  设置变形原点
  示例：transform-origin: top left;

### 2. animation
- **alternate** 动画交替反向播放
- **[animation-play-state](https://developer.mozilla.org/zh-CN/docs/Web/CSS/animation-play-state)**  控制 CSS 动画的播放状态
  暂停/播放（`paused` | `running`）
- **steps()**  逐帧动画
  示例：animation-timing-function: steps(x)

---

## 三、布局与响应式
### 1. flex
- **[flex](https://developer.mozilla.org/zh-CN/docs/Web/CSS/flex)**  简写属性
  示例：`flex: <grow> <shrink> <basis>;`
- **[flex-flow](https://developer.mozilla.org/zh-CN/docs/Web/CSS/flex-flow)**  简写属性
  示例：`flex-flow: <direction> <wrap>;`
### 2. 特殊布局
- **[aspect-ratio](https://developer.mozilla.org/zh-CN/docs/Web/CSS/aspect-ratio)**  强制宽高比
  示例：`aspect-ratio: 16 /9;`
- **[shape-outside](https://developer.mozilla.org/zh-CN/docs/Web/CSS/shape-outside)**  文字环绕
示例：
  ```css
  shape-outside: circle(50%);
  shape-outside: url(image.png);
  ```
- **[scroll-snap](https://developer.mozilla.org/zh-CN/docs/Web/CSS/scroll-snap-type)**  滚动吸附（需配合 scroll-snap-type 使用）
  [利用 CSS Scroll Snap，有效控制滚动](https://web.developers.google.cn/articles/css-scroll-snap?hl=zh-cn)

### 3. 三维控制
- **[backface-visibility](https://developer.mozilla.org/zh-CN/docs/Web/CSS/backface-visibility)**  指定当元素背面朝向观察者时是否可见
  示例：`backface-visibility: visible;` 或 `backface-visibility: hidden;`

---

## 四、渐变与遮罩
- **[conic-gradient()](https://developer.mozilla.org/en-US/docs/Web/CSS/gradient/conic-gradient)**
  锥形渐变（适合色轮/饼图，不是从中心辐射）
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
- **[outline](https://developer.mozilla.org/zh-CN/docs/Web/CSS/outline)**

### 2. 基本文本和字体样式
- [字体样式](https://developer.mozilla.org/zh-CN/docs/Learn_web_development/Core/Text_styling/Fundamentals)
- **letter-spacing**
  字符间距（0.1em）
- **[text-decoration](https://developer.mozilla.org/zh-CN/docs/Web/CSS/text-decoration)**
  文本装饰线条
- **[text-shadow](https://developer.mozilla.org/zh-CN/docs/Web/CSS/text-shadow)**
  文字阴影（2px 2px 4px rgba(0,0,0,0.5)）
- 

### 3. 交互增强
- **[cursor](https://developer.mozilla.org/zh-CN/docs/Web/CSS/cursor)**
  鼠标指针样式（grab, zoom-in）
- **resize**
  允许用户调整尺寸（vertical | horizontal）

