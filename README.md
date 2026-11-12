# GUETSEC 官网

桂林电子科技大学信息安全协会（[guetsec.cn](https://guetsec.cn/)）官方网站，基于 [Docusaurus](https://docusaurus.io/) 构建。

站点部署在腾讯 EdgeOne 上，`git push` 到 `main` 后自动构建。

## 使用

```shell
# 安装依赖
npm install

# 本地开发（热更新）
npm run start

# 构建静态资源到 build/
npm run build

# 预览构建结果
npm run serve

# 类型检查
npm run typecheck
```

## 目录

```text
src/
├── pages/           # 路由页面（首页、团队成员、荣誉奖项、相册）
├── components/      # 公共组件
├── data/            # 数据文件（成员）
└── css/             # 全局样式
docs/                # 文档页面
static/              # 静态资源（图片、头像等）
```

## 新增成员

在 `src/data/members.data.ts` 中追加一条记录，并把头像放到 `static/memberavatar/`：

```ts
{
  name: '昵称',
  avatar: 'memberavatar/昵称.jpg',
  description: '方向 | 一句话简介',
  blogUrl: 'https://example.com',
  grade: '2026级',
}
```
