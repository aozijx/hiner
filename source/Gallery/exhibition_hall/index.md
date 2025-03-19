---
title: picture
date: 2025-03-19 22:40:40
updated: 2025-03-19 22:40:40
type: banner
cover: https://t.alcy.cc/pc
container: true
rightbtn: 返回图库
rightbtnlink: /Gallery/
---

<style>
    .container{
        width: 100%;
        height: 440px;
        padding: 10px;
        border: 1px solid #000;
        border-radius: 6px;
        box-shadow: 0 4px 10px rgba(82, 75, 75, 0.5);
    }
    .qin {
        display: flex;
        height: 100%;
        flex: 1;
        justify-content: space-evenly;
    }
    .qin div span {
        font: 200 45px;
        height: 15%;
        text-align: center;
        display: flex;
        justify-content: center;
        align-items: center;
    }
    .box {
        flex: 1;
        overflow: hidden;
        transition: 0.5s;
        margin: 0 5px;
        border-radius: 10px;
        box-shadow: 5px 5px 10px rgba(0, 0, 0, 0.5);
        border: 4px solid #fff;
    }
    .box img {
        width: 200%;
        height: 85%;
        object-fit: cover;
        flex-shrink: 0;
        transition: 0.5s ease-in-out;
    }
    .box:hover {
        flex-basis: 50%;
    }
    .box:hover img {
        width: 100%;
        height: 100%;
    }
</style>
<div class="container">
    <div class="qin">
        <div class="box">
          <img src="https://www.minecraft.net/content/dam/minecraftnet/games/minecraft/key-art/Vanilla-PMP_Collection-Carousel-0_Update-Aquatic_1280x768.jpg"
            alt="">
        </div>
        <div class="box">
          <img src="https://www.stardewvalley.net/wp-content/uploads/2024/03/steam_cover.png"
            alt="">
        </div>
        <div class="box">
          <img src="https://game.mhcdkey.com/image/ask/200228/ashikmdu3l1.jpg"
            alt="">
        </div>
        <div class="box">
          <img src="https://img1.vqs.com/vqs/imgfile/20240712/12131934yp9j.jpg"
            alt="">
        </div>
        <div class="box">
          <img src="https://moe.jitsu.top/img/?sort=pc&34"
            alt="">
        </div>
    </div>
</div>

表现不太好，和主题 css 冲突覆盖了，但又不能既要又要，所以贴出代码[web](https://aozijx.github.io/xuao/src/html/genshin)

```css
.qin {
    display: flex;
    height: 100%;
    flex: 1;
    justify-content: space-evenly;
}
.qin div span {
    font: 200 45px;
    height: 15%;
    text-align: center;
    display: flex;
    justify-content: center;
    align-items: center;
}
.box {
    flex: 1;
    overflow: hidden;
    transition: 0.5s;
    margin: 0 5px;
    border-radius: 10px;
    box-shadow: 5px 5px 10px rgba(0, 0, 0, 0.5);
    border: 4px solid #fff;
}
.box img {
    width: 200%;
    height: 85%;
    object-fit: cover;
    flex-shrink: 0;
    transition: 0.5s ease-in-out;
}
.box:hover {
    flex-basis: 50%;
}
.box:hover img {
    width: 100%;
    height: 100%;
}
```

```html
<div class="qin">
  <div class="box">
    <img
      src="https://cdn.img2ipfs.com/ipfs/QmVfYmRkDZ7fGdSmeU5UZFR6rQ5GdSihrqrPLhLAF3mm4Y?filename=th%20(1).jpg"
      alt=""
    />
  </div>
  <div class="box">
    <img
      src="https://cdn.img2ipfs.com/ipfs/QmWAYybyJT7KK1e55HBoSDKvQnCY3ZtcLwEXsNPaw8Mawu?filename=th%20(2).jpg"
      alt=""
    />
  </div>
  <div class="box">
    <img
      src="https://cdn.img2ipfs.com/ipfs/Qmex3uRVbg6eRcnxPBkoBFP8VCSkbteZU4NMsskuQ3udNY?filename=th%20(6).jpg"
      alt=""
    />
  </div>
  <div class="box">
    <img
      src="https://cdn.img2ipfs.com/ipfs/QmTVBiPQZGiRk19uMoeDTuD4SVzWFonx1wjNvk869Wcmtw?filename=th%20(4).jpg"
      alt=""
    />
  </div>
  <div class="box">
    <img
      src="https://cdn.img2ipfs.com/ipfs/QmRTgvKcPYsiabGx9qEL5FAuhRUmdz8h6jSLEVFE5Y6KUj?filename=th%20(5).jpg"
      alt=""
    />
  </div>
</div>
```
