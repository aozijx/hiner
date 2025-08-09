---
title: Python QR Code生成二维码
date: 2025-04-19 12:49:37
author: Hiner
categories: [学习分享]
tags: [Python]
cover: https://aozijx.github.io/aozijx/wechat_qr_code.png
---

[qrcode](https://github.com/lincolnloop/python-qrcode) 是一个用于生成二维码的 [Python](https://pypi.org/project/qrcode/) 库，使用方便。它允许用户轻松将文本、URL 等数据编码为二维码图像。

## 主要特点
- **简单易用**：只需几行代码即可生成基础二维码
- **高度定制**：
  - 版本控制（1-40）
  - 纠错级别（L/M/Q/H）
  - 方块尺寸调整
  - 边框宽度设置
- **多格式输出**：支持 PNG/JPEG/SVG 图片格式，兼容终端 ASCII 显示

## 安装
```bash
pip install qrcode
```

## 基础用法
在命令行中，使用已安装的 qr 脚本：
```python
qr "Some text" > test.png
```

在 Python 中使用 make 快捷方式功能：
```python
import qrcode

data = "https://www.example.com"  # 要编码的内容

qr = qrcode.QRCode(
    version=1,  # 二维码尺寸 (1-40)
    error_correction=qrcode.constants.ERROR_CORRECT_L,  # 纠错级别
    box_size=10,  # 每个方块的像素大小
    border=4,     # 边框宽度（单位：方块数量）
)

qr.add_data(data)  # 将数据添加到 QRCode 对象中。
qr.make(fit=True)  # 自动适配数据最小版本

img = qr.make_image(fill_color="black", back_color="white") # 创建二维码图像对象
img.save("qrcode.png")  # 保存为PNG
```

### 参数说明
|参数|说明|
|--|--|
|version|二维码尺寸 (1-40)，值越大尺寸越大|
|box_size|每个小方块的像素大小|
|border|二维码外边框的方块数量|
|fill_color|二维码填充颜色（支持十六进制/RGB）|
|image_factory|输出格式（默认 PIL，可选 SVG）|

### 纠错级别说明（error_correction）
- ERROR_CORRECT_L 表示低纠错级别，损坏的部分不超过 7%，就仍然可以被正确解码。
- ERROR_CORRECT_M 默认纠错级别，适用于大多数常见的应用场景，损坏的部分不超过 15%，就仍然可以被正确解码。
- ERROR_CORRECT_Q 在户外环境中张贴的海报上的二维码，或者可能会被折叠、涂抹的纸质二维码，纠错能力 25%。
- ERROR_CORRECT_H 在工业环境中被油污、灰尘覆盖的二维码标签，纠错能力 30%。

## IImage factories
### 终端显示 ASCII 二维码
```python
import qrcode

qr = qrcode.QRCode()
qr.add_data("Hello Terminal!")
qr.print_ascii(tty=True)  # 在终端显示彩色二维码
```

### 生成 SVG 格式二维码
```python
import qrcode
from qrcode.image.svg import SvgImage

qr = qrcode.QRCode(image_factory=SvgImage)
qr.add_data("https://example.com")
qr.make_image().save("qrcode.svg")
```

## Styled Image
> 这些 QR Codes 不能保证适用于所有阅读器，建议 error correction 设置为 High（尤其是在嵌入图像）。  

StyledPilImage 是 qrcode 库中用于生成 样式化二维码图像 的类，基于 Pillow（PIL）库。它允许你通过不同的 module_drawer（模块绘制器）和颜色参数，自定义二维码的模块形状、颜色和整体视觉效果。

### 核心功能
1. 模块形状自定义
通过 module_drawer 参数，可以改变二维码模块（黑白色块）的几何形状。常用的内置绘制器包括：
   - 方形模块：SquareModuleDrawer（默认）
   - 圆形模块：CircleModuleDrawer
   - 圆角矩形模块：GappedSquareModuleDrawer
   - 其他形状：可自定义实现。

2. 颜色自定义
   - 前景色：二维码主色（通常是黑色）
   - 背景色：二维码背景色（通常是白色）
   - 渐变色支持：通过 Pillow 的 ImageColor 实现动态颜色过渡。

### 代码示例
生成带有圆形模块的二维码：
```python
import qrcode
from qrcode.image.styledpil import StyledPilImage
from qrcode.image.styles.moduledrawers import CircleModuleDrawer

qr = qrcode.QRCode(
    error_correction=qrcode.constants.ERROR_CORRECT_H,
    box_size=20,
    border=2
)
qr.add_data("https://example.com")

img = qr.make_image(
    image_factory=StyledPilImage,
    module_drawer=CircleModuleDrawer(),  # 圆形模块
    eye_drawer=CircleModuleDrawer(),     # 圆形定位标记
    color_mask=(255, 0, 0)               # 红色前景色
)
img.save("styled_qr.png")
```

生成渐变效果的二维码：
```python
from PIL import ImageColor

# 定义渐变色函数（水平方向渐变）
def gradient_mask(width, height):
    gradient = Image.new("RGB", (width, height))
    for x in range(width):
        color = ImageColor.getrgb(f"hsl({x % 360}, 70%, 50%)")
        for y in range(height):
            gradient.putpixel((x, y), color)
    return gradient

img = qr.make_image(
    image_factory=StyledPilImage,
    module_drawer=CircleModuleDrawer(),
    color_mask=gradient_mask  # 应用渐变掩码
)
```

### module_drawer （模块绘制器） 详解
1. 内置模块绘制器

|绘制器类名|效果描述|适用场景|
|----|----|----|
|SquareModuleDrawer|默认方形模块|传统二维码样式|
|CircleModuleDrawer|圆形模块，视觉更柔和|创意设计、品牌宣传|
|GappedSquareModuleDrawer|圆角矩形模块（间隙更明显）|高容错率下的美观设计|
|VerticalBarsDrawer|垂直条形模块|艺术化风格输出|

1. 自定义绘制器
实现一个 星形模块 的示例：
```python
from qrcode.image.styles.moduledrawers.base import ModuleDrawer

class StarModuleDrawer(ModuleDrawer):
    def drawrect(self, img, box, active):
        # box: (x0, y0, x1, y1)
        # active: True（前景）或 False（背景）
        if active:
            draw = ImageDraw.Draw(img)
            center = ((box[0] + box[2])/2, (box[1] + box[3])/2)
            radius = (box[2] - box[0]) * 0.4
            # 绘制五角星
            draw.regular_polygon((center, radius), 5, rotation=0, fill="black")
        return img

# 使用自定义绘制器
img = qr.make_image(
    image_factory=StyledPilImage,
    module_drawer=StarModuleDrawer()
)
```

## 定位标记独立样式
通过 eye_drawer 参数单独设置二维码的定位标记（三个角上的大方块）形状：
```python
from qrcode.image.styles.moduledrawers import SquareModuleDrawer, CircleModuleDrawer

img = qr.make_image(
    module_drawer=CircleModuleDrawer(),  # 模块为圆形
    eye_drawer=SquareModuleDrawer()      # 定位标记保持方形
)
```

### 动态颜色逻辑
结合 Pillow 的 ImageDraw 实现动态颜色逻辑，例如根据模块位置生成不同颜色：
```python
def dynamic_color_mask(width, height):
    mask = Image.new("RGB", (width, height))
    draw = ImageDraw.Draw(mask)
    for x in range(width):
        for y in range(height):
            # 根据坐标生成颜色
            r = int((x / width) * 255)
            g = int((y / height) * 255)
            b = 128
            draw.point((x, y), fill=(r, g, b))
    return mask

img = qr.make_image(
    color_mask=dynamic_color_mask,
    module_drawer=CircleModuleDrawer()
)
```

## 注意事项
1. 可扫描性
过度复杂的样式（如低对比度颜色、密集渐变）可能导致扫码失败。建议：
   - 保持前景与背景对比度 > 70%
   - 使用 error_correction=qrcode.constants.ERROR_CORRECT_H（最高容错率）

2. 性能问题
自定义绘制器或复杂颜色计算可能增加生成时间，尤其是大尺寸二维码。

