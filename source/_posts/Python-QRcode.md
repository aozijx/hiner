---
title: Python_QRcode生成二维码
date: 2025-04-19 12:49:37
author: Hiner
categories: []
tags: []
cover: https://aozijx.github.io/aozijx/wechat_qr_code.png
---

# Python QRcode 生成二维码

**`qrcode`** 是一个用于生成二维码的 Python 库，使用方便。它允许用户轻松将文本、URL 等数据编码为二维码图像。

## 主要特点
- **简单易用**：只需几行代码即可生成基础二维码
- **高度可定制**：
  - 版本控制（1-40）
  - 纠错级别（L/M/Q/H）
  - 方块尺寸调整
  - 边框宽度设置
- **多格式输出**：支持 PNG/JPEG/SVG 图片格式，兼容终端 ASCII 显示

### 安装
```bash
pip install qrcode
```

### 基础用法
以下代码展示了如何使用 qrcode 库生成一个简单的二维码，并将其保存为图片文件：
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

### 纠错级别说明
**`error_correction`**：纠错级别
  - ERROR_CORRECT_L 表示低纠错级别，损坏的部分不超过 7%，就仍然可以被正确解码。
  - ERROR_CORRECT_M 默认纠错级别，适用于大多数常见的应用场景，损坏的部分不超过 15%，就仍然可以被正确解码。
  - ERROR_CORRECT_Q 在户外环境中张贴的海报上的二维码，或者可能会被折叠、涂抹的纸质二维码，纠错能力 25%。
  - ERROR_CORRECT_H 在工业环境中被油污、灰尘覆盖的二维码标签，纠错能力 30%。

### 进阶用法：添加 Logo
```python
import qrcode
from PIL import Image

# 生成基础二维码
qr = qrcode.QRCode(
    version=1,
    error_correction=qrcode.constants.ERROR_CORRECT_H,
    box_size=10,
    border=4,
)
qr.add_data("https://www.example.com")
qr.make(fit=True)

# 转换为 RGBA 模式
qr_img = qr.make_image(fill_color="black", back_color="white").convert("RGBA")

# 加载并调整 Logo
logo = Image.open("logo.png").resize(
    (int(qr_img.size[0] * 0.2),  # Logo 宽度为二维码 20%
    int(qr_img.size[1] * 0.2)),  # Logo 高度为二维码 20%
    Image.LANCZOS
)

# 居中粘贴 Logo
position = (
    (qr_img.size[0] - logo.size[0]) // 2,
    (qr_img.size[1] - logo.size[1]) // 2
)
qr_img.paste(logo, position, logo)  # 第三个参数保留透明通道

qr_img.save("qrcode_with_logo.png")
```

### 输出格式扩展
#### 生成 SVG 格式二维码
```python
import qrcode
from qrcode.image.svg import SvgImage

qr = qrcode.QRCode(image_factory=SvgImage)
qr.add_data("https://example.com")
qr.make_image().save("qrcode.svg")
```

#### 终端显示 ASCII 二维码
```python
import qrcode

qr = qrcode.QRCode()
qr.add_data("Hello Terminal!")
qr.print_ascii(tty=True)  # 在终端显示彩色二维码
```