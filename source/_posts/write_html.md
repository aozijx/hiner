---
title: md文件写html
date: 2025-03-15 14:44:15
author:
categories:
tags: [css]
cover: https://cdn.img2ipfs.com/ipfs/QmWHUMHAc6fx4mYg6t8ZK92xhBxf1ztTaprFqXKcDW2VSr?filename=smile.jpg
---
## 翻转卡片
<style>
    .container {
        width: 90%;
        max-width: 600px;
        height: auto;
        min-height: 300px;
        margin: 20px auto;
        padding: 20px 10px;
        border: 2px solid #000;
        border-radius: 7px;
        display: flex;
        justify-content: center;
        gap: 15px;
        flex-wrap: wrap;
    }
    .flip-card {
        position: relative;
        width: 200px;
        height: 200px;
        transform-style: preserve-3d;
        perspective: 500px;
        margin: 10px;
    }
    .flip-front, .flip-back {
        position: absolute;
        width: 100%;
        height: 100%;
        top: 0;
        left: 0;
        display: flex;
        justify-content: center;
        align-items: center;
        border-radius: 5px;
        object-fit: cover;
        backface-visibility: hidden;
        transition: transform 0.8s ease-in-out;
        box-shadow: 0 4px 8px rgba(0,0,0,0.1);
    }
    .flip-front img {
        width: 100%;
        height: 100%;
        object-fit: cover;
        border-radius: 5px;
    }
    .flip-back {
        font-size: 2em;
        color: #000;
        padding: 15px;
        background-color: #e2e1e1;
        text-align: center;
    }
    .flip-card:hover .flip-front {
        transform: rotateY(-180deg);
    }
    .flip-card .flip-back {
        transform: rotateY(180deg);
    }
    .flip-card:hover .flip-back {
        transform: rotateY(0deg);
    }
    @media (max-width: 768px) {
        .container {
            width: 95%;
            padding: 10px 5px;
        }
        .flip-card {
            width: 180px;
            height: 180px;
            margin: 10px;
        }
        .flip-back {
            font-size: 1.2em;
            padding: 0px;
        }
    }
</style>
<div class="container">
    <div class="flip-card">
        <div class="flip-front">
            <img src="https://cdn.img2ipfs.com/ipfs/QmWHUMHAc6fx4mYg6t8ZK92xhBxf1ztTaprFqXKcDW2VSr?filename=smile.jpg">
        </div>
        <div class="flip-back"> Smile </div>
    </div>
    <div class="flip-card">
        <div class="flip-front">
            <img src="https://cdn.img2ipfs.com/ipfs/QmUErn9t6KiGpg3m69q24aytNeKjB7Xej2Gn3BXDgA7RN4?filename=hu.jpg">
        </div>
        <div class="flip-back"> Slience </div>
    </div>
</div>

```css
.flip-card {
    position: relative;
    width: 200px;
    height: 200px;
    transform-style: preserve-3d;
    perspective: 500px;
    margin: 10px;
}
.flip-front, .flip-back {
    position: absolute;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 5px;
    object-fit: cover;
    backface-visibility: hidden;
    transition: transform 0.8s ease-in-out;
    box-shadow: 0 4px 8px rgba(0,0,0,0.1);
}
.flip-front img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    border-radius: 5px;
}
.flip-back {
    font-size: 2em;
    color: #000;
    padding: 15px;
    background-color: #e2e1e1;
    text-align: center;
}
.flip-card:hover .flip-front {
    transform: rotateY(-180deg);
}
.flip-card .flip-back {
    transform: rotateY(180deg);
}
.flip-card:hover .flip-back {
    transform: rotateY(0deg);
}
```
```html
<div class="flip-card">
    <div class="flip-front">
        <img src="https://cdn.img2ipfs.com/ipfs/QmWHUMHAc6fx4mYg6t8ZK92xhBxf1ztTaprFqXKcDW2VSr?filename=smile.jpg">
    </div>
    <div class="flip-back"> Smile </div>
</div>
```
## 九宫格
<style>
    .jiu {
        display: grid;
        width: 300px;
        height: 300px;
        grid-template-columns: repeat(3, 1fr);
    }
    .jiu-item {
        overflow: hidden;
        transition: 0.1s;
        background-image: url(https://p3-pc.douyinpic.com/img/aweme-avatar/tos-cn-i-0813c001_ocAAAPjStmnQfCHA0FDXjI7hCqe9EjFgAcrAUL~c5_300x300.jpeg?from=2956013662);
        background-size: 300px 300px;
        background-position: var(--bgX, 0) var(--bgY, 0);
        transform: translate(0, 0);
    }
    .jiu:active .jiu-item {
        box-shadow: inset 0 0 0 1px #fff;
        transform: translate(var(--disX, 0), var(--disY, 0));
    }
    .jiu-item:hover {
        box-shadow: inset 0 0 0 1px #fff;
        transform: translate(var(--disX, 0), var(--disY, 0));
    }
</style>
<div class="container">
    <div class="jiu">
        <div class="jiu-item"></div>
        <div class="jiu-item"></div>
        <div class="jiu-item"></div>
        <div class="jiu-item"></div>
        <div class="jiu-item"></div>
        <div class="jiu-item"></div>
        <div class="jiu-item"></div>
        <div class="jiu-item"></div>
        <div class="jiu-item"></div>
    </div>
</div>
<script>
const items = document.querySelectorAll('.jiu-item');
for (let i = 0; i < items.length; i++) {
    const item = items[i];
    const r = Math.floor(i / 3);
    const c = i % 3;
    const bgX = -c * 100 + '%';  // 每格宽度 100px
    const bgY = -r * 100 + '%';  // 每格高度 100px
    // 鼠标悬停时每个格子向外偏移20px，中心格（c=1, r=1）不动
    const disX = (c - 1) * 20 + 'px';
    const disY = (r - 1) * 20 + 'px';
    item.style.setProperty('--bgX', bgX);
    item.style.setProperty('--bgY', bgY);
    item.style.setProperty('--disX', disX);
    item.style.setProperty('--disY', disY);
}
</script>

```css
.jiu {
    display: grid;
    width: 300px;
    height: 300px;
    grid-template-columns: repeat(3, 1fr);
}
.jiu-item {
    overflow: hidden;
    transition: 0.1s;
    background-image: url(https://p3-pc.douyinpic.com/img/aweme-avatar/tos-cn-i-0813c001_ocAAAPjStmnQfCHA0FDXjI7hCqe9EjFgAcrAUL~c5_300x300.jpeg?from=2956013662);
    background-size: 300px 300px;
    background-position: var(--bgX, 0) var(--bgY, 0);
    transform: translate(0, 0);
}
.jiu:active .jiu-item {
    box-shadow: inset 0 0 0 1px #fff;
    transform: translate(var(--disX, 0), var(--disY, 0));
}
.jiu-item:hover {
    box-shadow: inset 0 0 0 1px #fff;
    transform: translate(var(--disX, 0), var(--disY, 0));
}
```
```html
<div class="jiu">
    <div class="jiu-item"></div>
    <div class="jiu-item"></div>
    <div class="jiu-item"></div>
    <div class="jiu-item"></div>
    <div class="jiu-item"></div>
    <div class="jiu-item"></div>
    <div class="jiu-item"></div>
    <div class="jiu-item"></div>
    <div class="jiu-item"></div>
</div>
```
```JavaScript
const items = document.querySelectorAll('.jiu-item');
for (let i = 0; i < items.length; i++) {
    const item = items[i];
    const r = Math.floor(i / 3);
    const c = i % 3;
    const bgX = -c * 100 + '%';  // 每格宽度 100px
    const bgY = -r * 100 + '%';  // 每格高度 100px
    // 鼠标悬停时每个格子向外偏移20px，中心格（c=1, r=1）不动
    const disX = (c - 1) * 20 + 'px';
    const disY = (r - 1) * 20 + 'px';
    item.style.setProperty('--bgX', bgX);
    item.style.setProperty('--bgY', bgY);
    item.style.setProperty('--disX', disX);
    item.style.setProperty('--disY', disY);
}
```