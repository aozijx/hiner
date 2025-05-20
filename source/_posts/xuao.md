---
title: xuao Blog
date: 2025-04-16 23:33:31
author: Hiner
categories: [Tips]
tags: [Blog]
cover: img/default.avif
---

开始学习 HTML 和 CSS 写的一个页面，后来在网上看到有意思的效果，都会写一遍

## 渐变

<style>
    .color {
    width: 100%;
    font-size: 4em;
    text-align: center;
    }
    .color span {
        color: #e0e0e0;
        animation: ColorChange 1s infinite ease-in-out alternate;
    }
    @keyframes ColorChange {
        to {
            color: #ff0266;
        }
    }
</style>
<div class="color">
    <span>C</span>
    <span>O</span>
    <span>L</span>
    <span>O</span>
    <span>R</span>
    <span>F</span>
    <span>U</span>
    <span>L</span>
</div>
<script>
    document.querySelectorAll('.color span').forEach((span, index) => {
        span.style.animationDelay = `${index * 0.1}s`;
    });
</script>

```css
.color {
    width: 100%;
    font-size: 4em;
    text-align: center;
}
.color span {
    color: #e0e0e0;
    animation: ColorChange 1s infinite ease-in-out alternate;
}
@keyframes ColorChange {
    to {
        color: #ff0266;
    }
}
```
```JavaScript
document.querySelectorAll('.color span').forEach((span, index) => {
    span.style.animationDelay = `${index * 0.1}s`;
});
```

## 透明字
> 可换艺术字、使用滚动动画

<style>
    .gta {
        width: 100%;
        height: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
        font-size: 10vw;
        background: url(https://imgapi.xl0408.top/index.php) no-repeat center/cover;
        background-clip: text; /* 背景只在文字区域显示 */
        color: transparent; /* 文字有颜色 */
        animation: gta-scale 3s forwards;
    }
    @keyframes gta-scale {
        from {
            font-size: 500vw;
            /* color: transparent; */
        }
        to {
            font-size: 10vw;
            /* color: #fff; */
        }
    }
</style>
<div style="width: 100%;height: 600px;">
    <h1 class="gta">AMAZING</h1>
</div>

## 下划线

<style>
    .bline span {
        font-size: 1.5em;
        background: linear-gradient(to right, #f00, #00f) no-repeat;
        background-size: 0px 2px;
        background-position: right bottom;
        transition: background-size 1s;
        cursor: pointer;
    }
    .bline span:hover {
        background-size: 100% 2px;
        background-position: left bottom;
    }
</style>
<div class="bline letter">
    <span>Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur recusandae voluptatum quo dolore tenetur cum ipsa corporis, reprehenderit tempore inventore et labore sit illum natus, est maiores! Eveniet, corrupti reprehenderit?</span>
</div>

```css
.bline span {
    font-size: 1.5em;
    background: linear-gradient(to right, #f00, #00f) no-repeat;
    background-size: 0px 2px;
    background-position: right bottom;
    transition: background-size 1s;
    cursor: pointer;
}
.bline span:hover {
    background-size: 100% 2px;
    background-position: left bottom;
}
```

## 首字样式

<style>
    .letter div::first-letter {
        font-size: 2em;
        text-transform: uppercase;
        float: left;
        margin-right: 10px;
    }
    .letter div::selection {
        background-color: palevioletred;
        text-decoration: underline;
    }
</style>
<div class="bline letter">
    <h3><span>A Covenant Between Civilization and Nature</span></h3>
    <div>
        Environmental crises now threaten humanity’s survival. Polar ice melting at unprecedented rates, 90% of
        seabirds ingesting plastics, and rampant deforestation expose a fractured ecosystem. These are not isolated
        issues but symptoms of a broken human-nature covenant.
        True solutions demand dual action: individuals adopting sustainable habits and governments enforcing green
        policies. As Jane Goodall warned, "Protecting nature is not a choice but a necessity for civilization’s
        continuity." Environmentalism must evolve from "saving Earth" to redefining humanity’s role as stewards of a
        shared biological legacy. Only by honoring this planetary covenant can we safeguard tomorrow’s world.
    </div>
</div>

> **::selection** 设置选中文本的样式

> **::first-letter** 设置选中第一个字母

```css
.letter div::first-letter {
    font-size: 2em;
    text-transform: uppercase;
    float: left;
    margin-right: 10px;
}
.letter div::selection {
    background-color: palevioletred;
    text-decoration: underline;
}
```