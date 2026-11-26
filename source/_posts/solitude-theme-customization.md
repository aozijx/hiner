---
title: Solitude 主题自定义记录
date: 2025-03-16 18:09:10
updated: 2025-08-14  21:38:10
author: Hiner
categories: [魔改]
tags: [solitude]
cover: img/default.avif
---

## config
### 背景图片
Git 提交哈希：`007e2cf4b07e95d24f2845bb78f3a711c29a9aa6`
### 文章推荐轮播图
Git 提交哈希：`48ddc536baea18c56483140582a93e6384934abe`

## 右键菜单添加复制当前页面链接按钮
新建 `/themes/solitude/js/copylink.js`，内容如下：

```JavaScript
function copyPostLink() {
    const postLink = window.location.href;

    navigator.clipboard.writeText(postLink).then(() => {
        utils.snackbarShow("当前页面链接已复制到剪贴板", false, 2000);
    }).catch(err => {
        console.error("无法复制链接", err);
        utils.snackbarShow("复制失败，请重试", false, 2000);
    });
}
```
修改 `_config.solitude.yml`，引入 JS：

```yaml
extends:
   body:
       - <script src="/js/copylink.js" async></script>
```
然后右键菜单添加该项即可：
```yaml
right_menu:
  custom_list:
     - name: 复制链接
       click: copyPostLink()
       id: menu-copyPostLink
       class:
       icon: fas fa-link
```
第六项：https://r1n.top/post/c28e60f4.html

## 导航栏页面
{% link 'solitude' '官方文档' 'https://solitude.js.org/cn/configuration/fetures-page/friendshiplink' %}

- banner
> themes\solitude\layout\includes\widgets\page\links\banner.pug >line 30
```pug
a.tags-group-icon(href=url_for(y.link), title=y.name)
    if y.avatar
        img(src=y.avatar + (site.data.links.banner_suffix || ''), title=y.name)
    else
        img(src=y.topimg + (site.data.links.banner_suffix || ''), title=y.name)
    span.tags-group-title=y.name
```

> themes\solitude\source\css\_page\links.stylline >line 152 .site-card-text > .title
```styl
padding-bottom 7px
```

## brevity 页面
> themes\solitude\layout\includes\page\brevity.pug >line 20
```pug
if item.image
    .bber-content-img
        each img in item.image
            if typeof img === 'string'
                img(src=img)
            else
                img(src=img.url, alt=img.alt)
```
{% link '主题魔改——Solitude主题' '叶泯希·杂七杂八的🐕窝' 'https://yeminxi.github.io/posts/e4ce9af4.html' %}

## about 页面
- 游戏 icon 显示异常
> themes\solitude\layout\includes\widgets\page\about\hobbies.pug >line 16
```pug
.icon-group
    each icon in game.icon_group
        i(style=`background: url(${icon}) center / cover;`)
```

## 嘉然
{% link '看板娘插件文档' 'Paul' 'https://docs.paul.ren/pio/#/' %}
```yml
extends:
  body:
    - <script src="https://cdn.jsdelivr.net/npm/greensock@1.20.2/dist/TweenLite.js"></script>
    - <script src="https://cubism.live2d.com/sdk-web/cubismcore/live2dcubismcore.min.js"></script>
    - <script src="https://cdn.jsdelivr.net/npm/pixi.js@5.3.6/dist/pixi.min.js"></script>
    - <script src="https://cdn.jsdelivr.net/npm/pixi-live2d-display@0.3.1/dist/cubism4.min.js"></script>
    - <link href="https://cdn.jsdelivr.net/gh/journey-ad/blog-img@76ba2b3/live2d/lib/pio.css" rel="stylesheet" type="text/css"/>
    - <script src="https://cdn.jsdelivr.net/gh/journey-ad/blog-img@76ba2b3/live2d/lib/pio.js"></script>
    - <script src="https://cdn.jsdelivr.net/gh/journey-ad/blog-img@76ba2b3/live2d/lib/pio_sdk4.js"></script>
    - <script src="https://cdn.jsdelivr.net/gh/journey-ad/blog-img@76ba2b3/live2d/lib/load.js"></script>
```
