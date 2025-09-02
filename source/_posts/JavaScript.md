---
title: JavaScript 
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
- 点表示法不能使用变量作为属性名，也不能使用包含特殊字符或空格的属性名
- 方括号表示法可以使用**变量**作为属性名（如 date[prop] 其中 prop 是变量），也支持**特殊字符**的属性名

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
按照上面的写法，我遇到了这个报错 `Uncaught TypeError: Cannot read properties of undefined (reading '0')`，实际上程序正常运行了，但控制台报错看着不太友好，所以我想要改进一下代码。
解释：这个错误是因为当 num 在配置中不存在时，config[num] 返回 `undefined`，然后尝试访问 [0] 就会报错
解决办法：
1. 可选链操作符
用于安全地访问对象属性或方法，避免因访问 `null` 或 `undefined` 值而导致的错误。
```JavaScript
function fun(num) {
    const config = {
        1:' one',
        2: [ 'one', 'two' ]
    }

    // 使用 log 语句，可替换为实际逻辑
    console.log(config[num]?.[0] || 'default value')
}

fun(2)
```


