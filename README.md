# 裳运 CLOUROLOGY

一个可直接部署的静态网页项目，输入生日后会生成今日五行、幸运色、穿搭建议，以及可复制到小红书或 AI 助手的穿搭文案。

## 本地文件

- 入口页：`index.html`

## GitHub 部署

这个项目已经整理为纯静态站，适合放到 GitHub 仓库，并通过 GitHub Pages 发布。

推荐方式：

1. 新建一个 GitHub 仓库。
2. 把当前目录推送到该仓库的 `main` 分支。
3. 在 GitHub 仓库设置中启用 Pages。
4. 发布源选择 `Deploy from a branch`。
5. 分支选择 `main`，目录选择 `/ (root)`。

启用后，GitHub 会直接把仓库根目录下的静态文件发布出去。

## Supabase 部署

Supabase 更适合作为后端、数据库和文件服务平台。这个项目当前没有数据库或登录逻辑，所以如果要“上线到 Supabase”，最简单稳定的方式是：

1. 在 Supabase 新建项目。
2. 在 Storage 里创建一个 `public` bucket，并设置为 public。
3. 上传 `index.html` 到该 bucket。
4. 通过公开文件 URL 访问页面。

Supabase 公共文件 URL 形式参考官方文档：

`https://<project-ref>.supabase.co/storage/v1/object/public/<bucket>/<file>`

如果后续你想把“生日记录、用户收藏、分享卡片、登录”等能力接进来，我也可以继续把这个静态页改成真正使用 Supabase 数据库和认证的版本。
