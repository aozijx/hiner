---
title: 第一次使用hexo
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
### Tabs
标签页标签，用于显示标签页。
{% tabs test1 %}
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
{% tabs test1 %}

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
