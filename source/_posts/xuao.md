---
title: xuao Blog
date: 2025-04-16 23:33:31
author: Hiner
categories: [Tips]
tags: [Blog]
cover: img/default.avif
---

开始学习 HTML 和 CSS 写的一个页面，后来在网上看到有意思的效果，都会写一遍
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

<style>
    .line span {
        font-size: 1.5em;
        background: linear-gradient(to right, #f00, #00f) no-repeat;
        background-size: 0px 2px;
        background-position: right bottom;
        transition: background-size 1s;
        cursor: pointer;
    }
    .line span:hover {
        background-size: 100% 2px;
        background-position: left bottom;
    }
</style>
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
<div class="line letter">
    <span>“The supreme happiness of life is the conviction that we are loved; loved for ourselves—say rather, loved in
    spite of ourselves.”<br>
    “It was the best of times, it was the worst of times, it was the age of wisdom, it was the age of
    foolishness...”</span>
</div>

<div class="line letter">
    <h3><span>A Covenant Between Civilization and Nature</span></h3>
    <div>
        Environmental crises now threaten humanity’s survival. Polar ice melting at unprecedented rates, 90% of
        seabirds ingesting plastics, and rampant deforestation expose a fractured ecosystem. These are not isolated
        issues but symptoms of a broken human-nature covenant.
    </div>
    <div>
        True solutions demand dual action: individuals adopting sustainable habits and governments enforcing green
        policies. As Jane Goodall warned, "Protecting nature is not a choice but a necessity for civilization’s
        continuity." Environmentalism must evolve from "saving Earth" to redefining humanity’s role as stewards of a
        shared biological legacy. Only by honoring this planetary covenant can we safeguard tomorrow’s world.
    </div>
</div>

- **::first-letter**
  设置选中第一个字母
- **::selection**
  设置选中文本的样式

```css
.line span {
    font-size: 1.5em;
    background: linear-gradient(to right, #f00, #00f) no-repeat;
    background-size: 0px 2px;
    background-position: right bottom;
    transition: background-size 1s;
    cursor: pointer;
}
.line span:hover {
    background-size: 100% 2px;
    background-position: left bottom;
}
```
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