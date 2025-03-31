---
title: hexo 代码高亮
date: 2025-03-13 22:37:43
categories: [Tips]
tags: [hexo]
# cover: https://cdn.img2ipfs.com/ipfs/QmeBNLFU3QMkXFJm5tnXDVzwQakouyPbR4S8ahVGTLoGBE?filename=%E8%94%B7%E8%96%87%E8%8A%B1.jpeg
cover: https://img.alicdn.com/imgextra/i2/2209748222339/O1CN010muxj21T9JF0IPCI2_!!2209748222339.jpg
---
我遇到了代码高亮的问题，显示不正常等等，首先，在 hexo 根目录的 config 配置文件中缺少了 prismjs 的 enable: false 属性，然后关闭 highlight 的 wrap 和 hljs 属性等。
## 一
使用 `{% codeblock %}` 和 `{% endcodeblock %}` 包裹代码，并在 codeblock 后添加说明 [title] [lang:language] [url] [link text] [additional otions]
{% codeblock [title] [lang:language] [url] [link text] [additional otions] %}
code snippet
{% endcodeblock %}
## 二
使用 `{% code %}` 和 `{% endcode %}` 包裹代码，并在 code 后添加说明 [title] [lang:language] [url] [link text] [additional options]
{% code [title] [lang:language] [url] [link text] [additional options] %}
code snippet
{% endcode %}
## 三
使用两个` ``` `包裹代码，并在` ``` `后添加说明 [language] [title] [url] [link text] [additional options]
```[language] [title] [url] [link text]
code snippet
```

## 参数详解
1. [language]
   - 作用：指定代码的语言（如 python、javascript），以便正确高亮语法。
2. [title]
   - 作用：为代码块添加标题，显示在代码块上方（类似标注说明）。
3. [url] 和 [link text]
   - 作用：在代码块下方添加一个外部链接（如源码来源或参考文档）。
     - [url]：链接地址（需是完整 URL）。
     - [link text]：链接显示的文本。
4. [additional options]
   - 作用：添加额外配置选项（具体支持的功能取决于渲染器或插件）。
   - 常见选项：
     - linenos：显示行号（部分插件支持）。
     - highlight：高亮指定行（如 hl_lines=1,3）。

## 注意事项
1. 依赖渲染器或插件：
Hexo 默认的 hexo-renderer-marked 渲染器可能不支持所有参数（如 title、url）。
   - 若需完整功能，建议使用扩展插件：
     - hexo-renderer-markdown-it（支持更多 Markdown 扩展语法）。
     - hexo-prism-plugin（支持行号、高亮行等）。
2. 参数顺序：
参数的顺序必须严格按照 [language] [title] [url] [link text] [additional options]，不可随意调换。
3. 空格分隔：
参数之间需用空格分隔，若标题本身包含空格，需用引号包裹（如 "This is a title"）。

## 完整示例
```python 斐波那契数列 https://github.com/example/fibonacci 源码链接 linonstart=1 hl_lines=3
python 斐波那契数列 https://github.com/example/fibonacci 源码链接 linonstart=1 hl_lines=3
def fibonacci(n):
    a, b = 0, 1
    for _ in range(n):
        yield a
        a, b = b, a + b
```
效果说明：
- 语言：python（高亮 Python 语法）。
- 标题：斐波那契数列（显示在代码块顶部）。
- 链接：https://github.com/example/fibonacci（地址） + 源码链接（显示文本）。
- 选项：linenostart=1（行号从 1 开始）、hl_lines=3（高亮第 3 行）。




