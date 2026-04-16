# GitHub.io Personal Homepage

已进一步强化：结合 STAR 原则把核心项目经历结构化展示，并保留可继续完善的结果占位符。

## 当前页面包含

- 顶部导航（Projects / Skills / Experience / Contact）
- Hero 简介与研究方向标签
- STAR 项目卡片（3 项）：
  - 面向动态世界的多模态分层式视觉导航框架研究
  - 可重构铁电晶体管神经形态计算（合作）
  - 基于扩散策略与 BEV 投影的自主草坪探索与建图
- 每个项目包含 S/T/A/R 四段，并在 R 位置预留量化结果补充位
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
