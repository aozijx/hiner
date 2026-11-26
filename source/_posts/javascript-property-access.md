---
title: JavaScript 属性访问与可选链
date:  2025-07-26 11:07:41
author: Hiner
categories: [学习分享]
tags: [JavaScript]
cover: 
---

### 属性表达式
```JavaScript
const date = {
    year: 2025,
    month: 07,
    day: 26,
    0: 000
}

console.log(date.year, date.month, date.dady, date.0)
console.log(date["year"], date["month"], date["day"], date["0"], date[0])

const prop = "year";
console.log(date[prop]); // 输出 2025，相当于 date["year"]

const time = prompt("请输入你想查询的属性名：");
console.log(date[time]);

```
- 点表示法不能使用变量作为属性名，也不能访问包含特殊字符或空格的属性名。
- 方括号表示法可以使用**变量**作为属性名（如 `date[prop]`，其中 `prop` 是变量），也支持包含**特殊字符**的属性名。

### 可选链操作符
```JavaScript
function fun(num) {
    const config = {
        1:' one',
        2: [ 'one', 'two' ]
    }

    console.log(config[num][0])
}

fun(2)
```
按照上面的写法，我遇到了如下报错：`Uncaught TypeError: Cannot read properties of undefined (reading '0')`。虽然程序在当前示例中可以正常运行，但控制台报错不够友好，因此需要改进代码。
原因：当 `num` 在配置中不存在时，`config[num]` 返回 `undefined`，继续访问 `[0]` 就会报错。
解决方法：
1. 可选链操作符
用于安全地访问对象属性或方法，避免因访问 `null` 或 `undefined` 值而导致的错误。
```JavaScript
function fun(num) {
    const config = {
        1:' one',
        2: [ 'one', 'two' ]
    }

    // 可替换为实际逻辑
    console.log(config[num]?.[0] || 'default value')
}

fun(2)
```

```JavaScript
document.addEventListener('click', function(e) {
   // 获取元素本身
   const parent = e.currentTarget;
   // 获取被点击的元素
   const directChild = e.target;
   // 查找最近的直接子元素
   const directChild = e.target.closest('.parent-container');
})
```
