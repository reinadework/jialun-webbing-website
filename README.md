# 温州市嘉伦织带有限公司官网

这是一个面向鞋材采购与鞋企客户的中英文双语企业官网，核心展示鞋用松紧带、弹力织带、定制流程与品质关注。网站以静态 HTML 为主体，通过 GitHub 持续维护，并由 Hostinger 自动部署到 [jialun.net](https://jialun.net)。

## 修改网站

主要内容分别位于以下页面，可以直接修改：

- 中文首页：`index.html`
- 英文首页：`en/index.html`
- 中文产品页：`products/index.html`
- 英文产品页：`en/products/index.html`

网站图片和后续视频统一放在 `public/assets`，内容索引位于 `public/content/media.json`。具体替换方法请查看 `CONTENT_UPDATE_GUIDE.md`。

## 正式发布

正式仓库为 `reinadework/jialun-webbing-website`。Hostinger 已连接仓库的 `main` 分支，提交并推送后会自动部署到 `public_html`。

`.htaccess` 负责把 HTTP、`www.jialun.net` 和显式的 `index.html` 地址统一 301 重定向到 `https://jialun.net` 下的规范地址。请不要从仓库根目录删除该文件。

GitHub Pages 工作流会同时编译并发布 `dist`，作为构建检查和备用预览；正式域名仍以 Hostinger 为准。

## 本地预览

```bash
npm run dev
```

正式编译：

```bash
npm run build
npm run preview
```

编译结果会生成到 `dist` 目录。

## 发布前检查

运行 `npm run build`，再确认 `git status` 只包含本次需要发布的改动。网站版本记录见 `CHANGELOG.md`。
