---
title: JavaScript 
date:  2025-07-26 11:07:41
author: Hiner
categories: [学习分享]
tags: [JavaScript]
cover: 
---

属性表达式
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