# GitHub.io Personal Homepage

这个仓库已经包含可直接浏览的静态页面：`index.html` + `styles.css` + `script.js`。

## 你现在就可以做的两件事

1. **本地浏览**

```bash
python -m http.server 8000
```

打开浏览器访问：`http://localhost:8000`

2. **发布到 GitHub Pages（github.io）**

本仓库已包含自动部署工作流：`.github/workflows/deploy-pages.yml`。

### 发布步骤

1. 把仓库推送到 GitHub。
2. 打开仓库 `Settings` → `Pages`。
3. 在 **Build and deployment** 里选择 **GitHub Actions**。
4. 确认默认分支是 `main`（或 `master`，工作流已同时支持）。
5. 之后每次 push，都会自动部署页面。

### 访问地址

- 如果仓库名是：`<username>.github.io`
  - 地址就是：`https://<username>.github.io`
- 如果仓库名是普通仓库（如 `my-homepage`）
  - 地址通常是：`https://<username>.github.io/my-homepage/`

## 页面功能

- 现代化、简洁风格（Google 风格）
- 中英文一键切换按钮（`中文 / EN`）
- 响应式布局，支持手机/桌面浏览
