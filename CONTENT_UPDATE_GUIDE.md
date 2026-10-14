# 网站图片与视频更新说明

网站中的“图片与视频”区域由 `public/content/media.json` 控制。列表为空时，该区域和导航入口不会显示；加入内容后会自动出现。

## 在 GitHub 中新增图片

1. 打开网站仓库。
2. 进入 `public/assets/gallery/`，选择 **Add file → Upload files**，上传 JPG、PNG 或 WebP 图片。
3. 打开 `public/content/media.json`，选择编辑。
4. 在 `items` 中加入：

```json
{
  "type": "image",
  "src": "/public/assets/gallery/product-example.jpg",
  "titleZh": "新款松紧带",
  "titleEn": "New Elastic Webbing",
  "descriptionZh": "颜色与宽度可按样品定制。",
  "descriptionEn": "Colors and widths can be customized from samples.",
  "altZh": "新款松紧带产品实拍",
  "altEn": "New elastic webbing product sample"
}
```

## 在 GitHub 中新增视频

1. 将压缩后的 MP4 视频上传到 `public/assets/videos/`。
2. 如有视频封面，将封面上传到 `public/assets/gallery/`。
3. 在 `public/content/media.json` 的 `items` 中加入：

```json
{
  "type": "video",
  "src": "/public/assets/videos/production.mp4",
  "poster": "/public/assets/gallery/production-cover.jpg",
  "titleZh": "生产过程",
  "titleEn": "Production Process",
  "descriptionZh": "织带生产过程实拍。",
  "descriptionEn": "A look at the webbing production process."
}
```

## 同时展示多条内容

每条内容之间用英文逗号分隔：

```json
{
  "items": [
    {
      "type": "image",
      "src": "/public/assets/gallery/example-01.jpg",
      "titleZh": "产品图片",
      "titleEn": "Product Image"
    },
    {
      "type": "video",
      "src": "/public/assets/videos/example-01.mp4",
      "titleZh": "产品视频",
      "titleEn": "Product Video"
    }
  ]
}
```

## 注意事项

- 文件名使用英文小写、数字和连字符，例如 `pink-elastic-01.jpg`。
- 图片建议使用 JPG 或 WebP，避免上传未经压缩的超大原图。
- 视频建议使用 MP4，并尽量压缩；较长视频更适合放在 YouTube 等视频平台，再在网站中嵌入。
- 中英文标题应同时填写，保证语言切换完整。
- 提交到 GitHub 的部署分支后，Hostinger 开启自动部署时会自动更新网站。
- 如果修改后页面不显示，首先检查 JSON 中的英文逗号、双引号和括号是否完整。
