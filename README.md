# GitHub.io Personal Homepage

已强化为更完整的个人主页版本（中英文切换 + 现代化导航 + 项目亮点卡片）。

## 当前页面包含

- 顶部导航（Projects / Skills / Experience / Contact）
- Hero 简介与研究方向标签
- 两个真实项目卡片：
  - SVD-Nav
  - Lightweight-3DGS
- 技术技能区、研究方向区、教育背景区、联系方式区
- 中英文一键切换

## 本地浏览

```bash
python -m http.server 8000
```

打开：`http://localhost:8000`

## GitHub Pages 发布

仓库已包含自动部署工作流：`.github/workflows/deploy-pages.yml`。

- `<username>.github.io` 仓库：`https://<username>.github.io`
- 普通仓库（如 `my-homepage`）：`https://<username>.github.io/my-homepage/`
