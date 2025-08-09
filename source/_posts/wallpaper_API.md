---
title: 随机壁纸 API
date: 2025-03-30 15:28:00
author: Hiner
categories: [资源分享]
tags: [壁纸]
cover: https://moe.jitsu.top/img/?sort=pc&34
---

<script>
    window.addEventListener('DOMContentLoaded', () => {
        document.querySelectorAll('a.fancybox').forEach(a => {
            const img = a.querySelector('img');
            if (img) {
            // 用 img 标签替换 a 标签
            a.parentNode.replaceChild(img, a);
            }
        });
    })
</script>

分享一些图片或者壁纸 API ，仅收集
> 首次进入后刷新页面，点击图片即可切图

## [今日诗词](https://www.jinrishici.com/)
每次返回一句诗词
<script src="https://sdk.jinrishici.com/v2/browser/jinrishici.js" charset="utf-8"></script>
<div id="poem_sentence"></div>
<div id="poem_info"></div>
<script type="text/javascript">
  jinrishici.load(function(result) {
    var sentence = document.querySelector("#poem_sentence")
    var info = document.querySelector("#poem_info")
    sentence.innerHTML = result.data.content
    info.innerHTML = '【' + result.data.origin.dynasty + '】' + result.data.origin.author + '《' + result.data.origin.title + '》'
  });
</script>

## [Lorem Picsum](https://picsum.photos/)
更改链接数字以改变图片像素
<img src="https://picsum.photos/1920/1080" onclick="changeImage(this)" alt="" >

## 必应壁纸
<img src="https://www.cn.bing.com/th?id=OHR.CherryBlossomDC_EN-US9897772834_1920x1080.jpg&rf=LaDigue_1920x1080.jpg&pid=hp" onclick="changeImage(this)" alt="" >
<img src="https://api.xsot.cn/bing?jump=true" onclick="changeImage(this)" alt="" >

## 超级小兔的随机图
<img src="https://imgapi.xl0408.top/index.php" onclick="changeImage(this)" alt="">

## 忘了
<img src="https://webp.mingcy.cn/" onclick="changeImage(this)" alt="">

## [动漫高清壁纸 - 岁月小筑](https://cloud.qqshabi.cn/apidetail/33.html)
<img src="https://cloud.qqshabi.cn/api/images/api.php" onclick="changeImage(this)" alt="">

## [PAULZZH 东方Project随机图片API](https://img.paulzzh.com/)
<img src="https://img.paulzzh.com/touhou/random" onclick="changeImage(this)" alt="">

## [保罗 API ](https://api.paugram.com/)
<img src="https://api.paugram.com/wallpaper/" onclick="changeImage(this)" alt="">

## [墨天逸— 随机图片API](https://api.mtyqx.cn/)
<img src="https://api.mtyqx.cn/tapi/random.php" onclick="changeImage(this)" alt="">

## [赫萝随机图片 API](https://api.horosama.com/)
<img src="https://api.horosama.com/random.php" onclick="changeImage(this)" alt="">

## 小小 API
二次元（type为pc或wap表示横图或竖图）：
<img src="https://v2.xxapi.cn/api/randomAcgPic?type=pc&return=302" onclick="changeImage(this)" alt="">
<img src="https://v2.xxapi.cn/api/meinvpic?return=302" onclick="changeImage(this)" alt="">
<img src="https://v2.xxapi.cn/api/baisi?return=302" onclick="changeImage(this)" alt="">
<img src="https://v2.xxapi.cn/api/heisi?return=302" onclick="changeImage(this)" alt="">

## [LoliAPI | LoliAPI](https://www.loliapi.com/)
{% tabs LoliAPI %}
<!-- tab 双端自适应二次元图片 -->
<img src="https://www.loliapi.com/acg/" onclick="changeImage(this)" alt="">
<!-- endtab -->
<!-- tab 电脑端二次元图片 -->
<img src="https://www.loliapi.com/acg/pc/" onclick="changeImage(this)" alt="">
<!-- endtab -->
<!-- tab 移动端二次元图片  -->
<img src="https://www.loliapi.com/acg/pe/" onclick="changeImage(this)" alt="">
<!-- endtab -->
<!-- tab 随机二次元头像  -->
<img src="https://www.loliapi.com/acg/pp/" onclick="changeImage(this)" alt="">
<!-- endtab -->
<!-- tab 随机二次元图片 -->
<img src="https://www.loliapi.com/bg/" onclick="changeImage(this)" alt="">
<!-- endtab -->
{% endtabs %}

## [如诗的 API 接口](https://api.likepoems.com/)
- 随机返回pixiv图片
<img src="https://api.likepoems.com/img/pixiv/" onclick="changeImage(this)" alt="">

- 随机返回pc图片
<img src="https://api.likepoems.com/img/pc/" onclick="changeImage(this)" alt="">

## [随机萌图](https://api.miaomc.cn/image/#APIContainer)
<img src="https://api.miaomc.cn/image/get" onclick="changeImage(this)" alt="">

## [无铭 API](https://jkapi.com/)
收录 API ，需注册获取 API key

## [98情缘API](https://www.98qy.com/sjbz/)
<img src="http://www.98qy.com/sjbz/api.php" onclick="changeImage(this)" alt="">

## [Jitsuの随机涩图API](https://img.jitsu.top/#/?id=jitsuの随机涩图api)(img.jitsu.top)
<img src="https://moe.jitsu.top/img/" onclick="changeImage(this)" alt="">
<img src="https://moe.jitsu.top/img/?sort=pc&34" onclick="changeImage(this)" alt="">
<img src="https://moe.jitsu.top/api" onclick="changeImage(this)" alt="">
<img src="https://moe.jitsu.top/r18" onclick="changeImage(this)" alt="">

## [韩小韩WebAPI接口](https://api.vvhan.com/)
### Bing
<img src="https://api.vvhan.com/api/bing" onclick="changeImage(this)" alt="">

### 风景
<img src="https://api.vvhan.com/api/wallpaper/views" onclick="changeImage(this)" alt="">

### 一言
<p data-src="https://api.vvhan.com/api/ian/rand">点击此处加载初始文本</p>

## [桑帛云 API](https://api.lolimi.cn/)
<img src="https://api.lolimi.cn/API/tup/xjj.php" onclick="changeImage(this)" alt="">
<img src="https://api.lolimi.cn/API/meizi/api.php?type=image" onclick="changeImage(this)" alt="">
<img src="https://api.lolimi.cn/API/dmt/api.php?type=image" onclick="changeImage(this)" alt="">

[pc动漫壁纸（横屏）](https://api.lolimi.cn/doc/doc-api_pmpa.html)
<img src="https://api.lolimi.cn/API/dmtx/pc.php" onclick="changeImage(this)" alt="">

[爱情公寓语录](https://api.lolimi.cn/doc/doc-api_jfcx.html)
<p data-src="https://api.lolimi.cn/API/aiqing/api.php">点击此处加载初始文本</p>

[动漫一言](https://api.lolimi.cn/doc/doc-api_jcab.html)
<p data-src="https://api.lolimi.cn/API/dmyiyan/api.php">点击此处加载初始文本</p>

## [IMGAPI](https://imgapi.cn/wiki.html)
<img src="https://imgapi.cn/api.php" onclick="changeImage(this)" alt="">

- 动漫
<img src="https://imgapi.cn/api.php?fl=dongman&gs=images" onclick="changeImage(this)" alt="">

- 妹子
<img src="https://imgapi.cn/api.php?zd=mobile&fl=meizi&gs=images" onclick="changeImage(this)" alt="">

## [素颜 API](https://api.suyanw.cn/)
- [随机高清风景壁纸](https://api.suyanw.cn/doc/scenery.php)
<img src="https://api.suyanw.cn/api/scenery.php" onclick="changeImage(this)" alt="">

- [黑丝 API](https://api.suyanw.cn/doc/hs.php) 
<img src="https://api.suyanw.cn/api/hs.php" onclick="changeImage(this)" alt="">

- ks
<img src="https://api.suyanw.cn/api/ksxjj.php" onclick="changeImage(this)" alt="">

## [一直小辣鸡的随机图片 API](https://www.onexiaolaji.cn/RandomPicture/)
<img src="https://www.onexiaolaji.cn/RandomPicture/api/?key=qq249663924" onclick="changeImage(this)" alt="">

## [栗次元 API](https://t.alcy.cc/)
- PC横图
<img src="https://t.alcy.cc/pc" onclick="changeImage(this)" alt="">

- 风景横图
<img src="https://t.alcy.cc/fj" onclick="changeImage(this)" alt="">

## [MirlKoiAPI](https://dev.iw233.cn/API/index.php)

## [樱道随机图片 API 接口](https://img.r10086.com/)

## [MoeHuAPI](https://img.moehu.org/)
- 喵星人
<img src="https://img.moehu.org/pic.php?id=cat" onclick="changeImage(this)" alt="">

- 小姐姐
<img src="https://img.moehu.org/pic.php?id=xjj" onclick="changeImage(this)" alt="">

- 二次元
<img src="https://img.moehu.org/pic.php?id=img1" onclick="changeImage(this)" alt="">

- 初音未来
<img src="https://https://img.moehu.org/pics.php?id=miku" onclick="changeImage(this)" alt="">

- 动画台词
<p data-src="https://img.moehu.org/txt/?id=dm">点击此处加载初始文本</p>

## [PearAPI](https://api.pearktrue.cn/)
- 随机三坑少女
<img src="https://api.pearktrue.cn/api/beautifulgirl/?type=image" onclick="changeImage(this)" alt="">

## [糖豆子 API](http://api.tangdouz.com/)
{% fold '展开' %}
- 随机二次元竖图http://api.tangdouz.com/abz/dm.php
- 随机美腿http://api.tangdouz.com/mt.php
- 美女图http://api.tangdouz.com/mn.php
- 抖音瞳瞳系列视频 https://api.yujn.cn/api/tongtong.php
- 超高质量图片 https://api.yujn.cn/api/gzl_ACG.php?type=image&form=pc
{% endfold %}

## [久黎 API](http://jiuli.xiaoapi.cn/)
  - http://jiuli.xiaoapi.cn/i/img/mnyjs.php

## [遇见 API](https://api.yujn.cn/)
{% fold '展开' %}
- 最新小姐姐短视频 http://api.yujn.cn/api/zzxjj.php
- 小姐姐短视频 http://api.yujn.cn/api/xjj.php
- 各类小姐姐视频 http://api.yujn.cn/api/juhexjj.php
- 萝莉视频 http://api.yujn.cn/api/luoli.php
- 女大学生 https://api.yujn.cn/api/nvda.php
{% endfold %}

- 唯美写真
<img src="http://api.yujn.cn/api/xiezhen.php?type=image" onclick="changeImage(this)" alt="">

- cos图
<img src="http://api.yujn.cn/api/cos.php" onclick="changeImage(this)" alt="">

- 随机动漫图
<img src="http://api.yujn.cn/api/ecy.php" onclick="changeImage(this)" alt="">

- 高质量acg图片
<img src="http://api.yujn.cn/api/ACG.php" onclick="changeImage(this)" alt="">

- 动漫风景图
<img src="http://api.yujn.cn/api/dmfj.php" onclick="changeImage(this)" alt="">

- jk图
<img src="http://api.yujn.cn/api/jk.php" onclick="changeImage(this)" alt="">

- 原神图
<img src="http://api.yujn.cn/api/ys.php" onclick="changeImage(this)" alt="">

- 原神cos
<img src="http://api.yujn.cn/api/yscos.php" onclick="changeImage(this)" alt="">

- 黑丝
<img src="http://api.yujn.cn/api/heisi.php" onclick="changeImage(this)" alt="">

- 堆糖搜图
<img src="https://api.yujn.cn/api/duitang.php?type=image&msg=星野爱" onclick="changeImage(this)" alt="">

- 随机腿子
<img src="http://api.yujn.cn/api/tui.php?" onclick="changeImage(this)" alt="">

## [问情免费 API](https://free.wqwlkj.cn/)
- 快手小姐姐图 
<img src="https://free.wqwlkj.cn/wqwlapi/ks_xjj.php?type=image" onclick="changeImage(this)" alt="">

- 腹肌图
<img src="https://free.wqwlkj.cn/wqwlapi/sgfj.php?type=image" onclick="changeImage(this)" alt="">

- cos
<img src="https://free.wqwlkj.cn/wqwlapi/hlxcos.php?type=image" onclick="changeImage(this)" alt="">

## [最要学习 API](https://api.zylearning.top/)
- 随机类型壁纸
<img src="https://api.zylearning.top/api/wallpaper" onclick="changeImage(this)" alt="">

- 4K壁纸
<img src="https://api.zylearning.top/api/wallpaper?lx=4k" onclick="changeImage(this)" alt="">

- 美女模特
<img src="https://api.zylearning.top/api/wallpaper?lx=mnmt" onclick="changeImage(this)" alt="">

- 爱情美图
<img src="https://api.zylearning.top/api/wallpaper?lx=aqmt" onclick="changeImage(this)" alt="">

- 风景大片
<img src="https://api.zylearning.top/api/wallpaper?lx=fj" onclick="changeImage(this)" alt="">

- 动漫壁纸
<img src="https://api.zylearning.top/api/wallpaper?lx=dm" onclick="changeImage(this)" alt="">

- 明星壁纸
<img src="https://api.zylearning.top/api/wallpaper?lx=mx" onclick="changeImage(this)" alt="">

- 萌宠动物
<img src="https://api.zylearning.top/api/wallpaper?lx=dw" onclick="changeImage(this)" alt="">

- 游戏壁纸
<img src="https://api.zylearning.top/api/wallpaper?lx=yx" onclick="changeImage(this)" alt="">

- 汽车壁纸
<img src="https://api.zylearning.top/api/wallpaper?lx=qc" onclick="changeImage(this)" alt="">

- 炫酷时尚
<img src="https://api.zylearning.top/api/wallpaper?lx=ss" onclick="changeImage(this)" alt="">

- 影视剧照 
<img src="https://api.zylearning.top/api/wallpaper?lx=ysjz" onclick="changeImage(this)" alt="">

## [独醉 API](https://api.dzzui.com/)
- 随机 cos 图 
<img src="https://api.dzzui.com/api/cosplay" onclick="changeImage(this)" alt="">

## [ALAPI](https://www.alapi.cn/)
- 随机动漫图 
<img src="https://v2.alapi.cn/api/acg?token=KA6k5H7oBNZavgEJ" onclick="changeImage(this)" alt="">

## 来源
{% link '赵苦瓜のBlog' '欢迎来到赵苦瓜のBlog~！' 'https://blog.jixiaob.cn/?post=93' %}
{% link '酷小呵' ' ' 'https://www.kuhehe.top/2023/03a05de98.html#30-远方随机风景壁纸api' %}

> 遇到问题，fancybox

```html
<img src="https://imgapi.xl0408.top/index.php" onclick="changeImage(this)" alt="">
```

```JavaScript
function changeImages(e) {
    e.src += (e.src.includes('?') ? '&' : '?') + 't=' + Date.now();
}
```

<script>
    function changeImage(e) {
        e.src += (e.src.includes('?') ? '&' : '?') + 't=' + Date.now();
    }
    const debounced = debounce(changeImage, 2000);
</script>
<script>
    function debounce(func, delay) {
      let timer;
      return function(...args) {
          if (!timer) func.apply(this, args);
          clearTimeout(timer);
          timer = setTimeout(() => timer = null, delay);
      }
    }
</script>
<script>
async function fetchText(el) {  // 直接接收元素作为参数
    try {
        if (!el || el.tagName === 'IMG') return; // 排除图片
        el.textContent = '加载中...';
        const res = await fetch(el.dataset.src + '?t=' + Date.now());
        // 修正变量名拼写错误
        if (!res.ok) throw new Error(`${res.status} ${res.statusText}`);
        el.textContent = await res.text();
    } catch (error) {
        console.error('加载失败:', error);
        el.textContent = '加载失败，点击重试';
        el.style.color = 'red';
    }
}

// 初始化绑定点击事件
document.addEventListener('DOMContentLoaded', () => {
    // 使用事件委托处理点击
    document.body.addEventListener('click', e => {
        const targetEl = e.target.closest('[data-src]');
        if (targetEl) fetchText(targetEl);
    });
    
    // 初始化自动加载（直接传递元素）
    document.querySelectorAll('[data-src]:not(img)').forEach(el => {
        fetchText(el);
    });
});
</script>