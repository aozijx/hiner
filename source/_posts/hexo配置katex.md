---
title: hexo配置katex
date: 2025-03-13 22:46:59
categories: [教程]
tags: [Katex]
cover: https://latex.codecogs.com/svg.image?&space;K^AT_E^X
---
## 安装 KaTeX 插件
Hexo 社区提供了 hexo-filter-katex 插件，能自动处理公式渲染：
```bash
npm install hexo-filter-katex --save
```
## 配置 Hexo 全局文件
在 Hexo 根目录的 _config.yml 中添加以下配置：
```yml
katex:
  # 开启全局渲染（无需在每篇文章中声明）
  global: false  # 建议设为 false，按需在文章头启用
  # 排除不需要渲染的元素（可选）
  exclude: 
    - blockquote
    - code
```
## 修改文章 Front-matter
在需要渲染公式的文章头部添加 katex: true：
```markdown
---
title: 测试文章
date: 2025-01-01
katex: true
---
```
## 解决 Markdown 语法冲突
Hexo 默认的 Markdown 渲染器 (hexo-renderer-marked) 会与 KaTeX 的 _ 和 \\ 冲突，更换渲染器：
```bash
npm uninstall hexo-renderer-marked --save
npm install hexo-renderer-markdown-it --save
```
在 _config.yml 中添加配置：
```yml
# Markdown-it config
markdown:
  render:
    html: true # 不转义 HTML 内容 # 转义 HTML 内容，使标签作为文本输出
    xhtmlOut: false # 必须使用完全的 XHTML 代码，换行必须为 <br/> # 不必必使用完全的 XHTML 代码，换行可以为 <br>
    breaks: true # 每次会车换行相当于一个 <br/> 标签 # Pa每次会车换行会被忽略
    linkify: true # 类似链接的文本，作为链接输出 # 类似链接的文本，依然作为文本输出
    typographer: true # 替换常见的排版元素 # 不替换常见的排版元素
    quotes: '“”‘’' # 'single'、"double" 变成 ‘single’、“double” # 'single'、"double" 变成 “single”、«single»
  plugins:
    - markdown-it-abbr
    - markdown-it-footnote
    - markdown-it-ins
    - markdown-it-sub
    - markdown-it-sup
  anchors:
    level: 2 # 生成 Heading ID 的标题等级
    collisionSuffix: 'v' # Heading ID 重复时，数字的后缀
    permalink: true # 则创建一个锚标记，除标题外还有一个固定链接
    permalinkClass: header-anchor # 用于固定链接锚标记的样式
    permalinkSymbol: ¶ # 用于固定链接标记的符号
```
```yml
markdown:
  plugins:
    - markdown-it-katex
  anchors:
    level: 2
```
## 引入 KaTeX CSS/JS
在主题模板文件（如 themes/your-theme/layout/_partial/head.ejs）中添加：
```html
<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/KaTeX/0.6.0/katex.min.css">
<script src="https://cdnjs.cloudflare.com/ajax/libs/KaTeX/0.6.0/katex.min.js"></script>
```
[KaTeX and MathJax Comparison Demo](http://www.intmath.com/cg5/katex-mathjax-comparison.php)
生成公式或图片工具：
- https://editor.codecogs.com/
- https://www.imatheq.com/corpsite/index.html
https://www.jianshu.com/p/588ab3d22eb8
https://dora-cmon.github.io/posts/95c5c5d2/
https://sheepsparks.cn/2025/02/04/Hexo%E5%8D%9A%E5%AE%A2%E6%A1%86%E6%9E%B6%E5%AD%A6%E4%B9%A0/
https://www.luogu.com.cn/article/4a81e2tt
