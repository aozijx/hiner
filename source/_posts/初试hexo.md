---
title: 初试hexo
date: 2025-03-12 10:04:33
categories: [Tips]
tags: [hexo]
author: Hiner
cover: https://cdn.img2ipfs.com/ipfs/QmaU3HScuxg29LPfTWhDvDK33e7uQQ1ucBqSguybVdG1Zp?filename=hexo.png
---
## markdown的Front-matter
```yml
title: 文章标题
date: 2023-10-01 00:00:00
updated: 2023-10-02 00:00:00
tags: [标签1, 标签2]
categories: [分类1]
cover:
  # 封面图路径（标题背景依赖此字段！）
  image: /images/cover.jpg
  # 是否在文章中隐藏封面图（默认显示）
  hidden: true
# 是否开启评论（部分主题依赖第三方服务）
comments: true
# 置顶优先级（数值越大越靠前，0 表示不置顶）
sticky: 100
# 是否启用数学公式支持
mathjax: false        
```
## 外挂标签
### **Tabs**
标签页标签，用于显示标签页。
{% tabs test %}
<!-- tab 语法 -->
```markdown
{% tabs 唯一名称, [index] %}

<!-- tab [唯一Tab] [@icon] -->

任何内容（也支持内联标签）。

<!-- endtab -->

{% endtabs %}
```
<!-- endtab -->

<!-- tab 示例 -->
```markdown
{% tabs test %}

<!-- tab -->
**This is Tab 1.**
<!-- endtab -->

<!-- tab -->
**This is Tab 2.**
<!-- endtab -->

<!-- tab -->
**This is Tab 3.**
<!-- endtab -->

{% endtabs %}
```
<!-- endtab -->

<!-- tab 效果 -->
{% tabs test %}

<!-- tab -->
**This is Tab 1.**
<!-- endtab -->

<!-- tab -->
**This is Tab 2.**
<!-- endtab -->

<!-- tab -->
**This is Tab 3.**
<!-- endtab -->

{% endtabs %}
<!-- endtab -->
{% endtabs %}

### **Fold**
折叠标签，用于显示折叠内容。
{% tabs Fold %}
<!-- tab 语法 -->
```markdown
{% fold 'title' open %}
content
{% endfold %}
```
<!-- endtab -->

<!-- tab 参数 -->
|参数   |说明     |默认值      |
|-------|---------|----------|
|title  |标题     |无         |
|open   |是否展开 |不填不显示  |
<!-- endtab -->

<!-- tab 效果 -->
{% fold 'title' open %}
content
{% endfold %}
<!-- endtab -->
{% endtabs %}

### **Card**
Card 标签，用于显示卡片。
{% tabs Card %}
<!-- tab 语法 -->
```markdown
{% card 'title','url','cover','score','desc','icon','tag','width','height' %}
```
<!-- endtab -->

<!-- tab 参数 -->
|参数	  |说明	  |默认值|
|-------|------|-----|
|title	|标题	  |无   |
|url	  |链接	  |无   |
|cover	|封面	  |无   |
|score	|评分	  |无   |
|desc 	|评价	  |无   |
|icon 	|图标	  |无   |
|tag	  |标签	  |无   |
|width	|宽度	  |无   |
|height	|高度	  |无   |
<!-- endtab -->

<!-- tab 示例 -->
```markdown
{% card '诡秘之主','https://book.qidian.com/info/1010868264/','https://bookcover.yuewen.com/qdbimg/349573/1010868264/300','4.5','第一次接触这种西方文学小说，刚开始感觉看不懂，断断续续看了很多次。后来越看越觉好看，每次看甚至都需要查“文档”','fa-solid fa-book-open','小说' %}
```
<!-- endtab -->
<!-- tab 效果 -->
{% card '诡秘之主','https://book.qidian.com/info/1010868264/','https://bookcover.yuewen.com/qdbimg/349573/1010868264/300','4.5','第一次接触这种西方文学小说，刚开始感觉看不懂，断断续续看了很多次。后来越看越觉好看，每次看甚至都需要查“文档”','fa-solid fa-book-open','小说' %}
<!-- endtab -->
{% endtabs %}
