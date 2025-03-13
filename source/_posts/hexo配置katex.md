---
title: hexo配置katex
date: 2025-03-13 22:46:59
tags:
---
生成公式或图片工具：
- https://editor.codecogs.com/
- https://www.imatheq.com/corpsite/index.html
https://www.jianshu.com/p/588ab3d22eb8
https://dora-cmon.github.io/posts/95c5c5d2/
https://sheepsparks.cn/2025/02/04/Hexo%E5%8D%9A%E5%AE%A2%E6%A1%86%E6%9E%B6%E5%AD%A6%E4%B9%A0/
https://www.luogu.com.cn/article/4a81e2tt

hexo _config.yml
```
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

katex:
  # 开启全局渲染（无需在每篇文章中声明）
  global: false  # 建议设为 false，按需在文章头启用
  # 排除不需要渲染的元素（可选）
  exclude: 
    - blockquote
    - code
```

solitude _config.yml
```
- <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/katex@0.16.9/dist/katex.min.css">
   - <script defer src="https://cdn.jsdelivr.net/npm/katex@0.16.9/dist/katex.min.js"></script>
  #  - <script defer src="https://cdn.jsdelivr.net/npm/katex@0.16.9/dist/contrib/auto-render.min.js"
  #       onload="renderMathInElement(document.body, {
  #         delimiters: [
  #           {left: '$$', right: '$$', display: true},
  #           {left: '$', right: '$', display: false}
  #         ]
  #       });">
  #     </script>
```
