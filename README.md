# AG工作室智能考勤前端

这是智能考勤系统的静态前端仓库，包含登录页、用户仪表盘、管理后台和植物工厂页面。项目当前使用原生 HTML、CSS 和 JavaScript，适合部署到 Cloudflare Pages、GitHub Pages 或其他静态托管服务。

## 页面说明

| 文件 | 说明 |
| --- | --- |
| `index.html` | 登录页、邀请链接入口和赞助信息 |
| `dashboard.html` | 用户仪表盘、签到任务、邮箱绑定、邀请、反馈、购买卡密和个人中心 |
| `admin.html` | 管理后台，包括用户、卡密、留言和系统配置管理 |
| `plant.html` | 植物工厂监控和控制页 |
| `shared.js` | 共享配置、HTML 转义、Toast、会话清理等工具函数 |
| `site.webmanifest` | PWA/图标配置 |
| `vxcode.png` / `zfbcode.png` | 收款码图片 |

## 快速预览

本项目没有构建步骤，可以直接用静态服务器打开：

```bash
python -m http.server 5500
```

然后访问：

```text
http://localhost:5500/index.html
http://localhost:5500/dashboard.html
http://localhost:5500/admin.html
```

直接双击 HTML 文件也能看到页面，但推荐使用静态服务器，路径和静态资源行为更接近线上部署。

## API 配置

所有页面共用 `shared.js` 中的配置：

```js
const CONFIG = {
  API_BASE: 'https://api.agai.online/api',
  PLANT_API_BASE: 'https://login.agai.online/api'
};
```

如果后端域名变化，只需要修改 `shared.js`，不要在各个 HTML 文件里分散修改。

## 安全说明

- 前端不再把考勤密码保存到 `localStorage`。
- 登录态仍暂存在 `localStorage.token`，后续建议配合后端改成 `HttpOnly + Secure + SameSite` Cookie。
- 动态渲染用户输入或接口返回文本时，应使用 `escapeHTML()` 或 `textContent`，避免 XSS。
- 管理后台编辑用户密码时，密码框留空表示不修改已有密码。

## UI 设计建议

当前页面已经补充基础移动端适配，但仍建议继续推进设计系统化：

1. 将按钮、卡片、表单、徽章、Toast、弹窗抽成统一 CSS 组件。
2. 仪表盘第一屏优先展示“今日签到状态、下次签到时间、立即签到、最近结果”。
3. 后台保持运营工具风格：更紧凑的表格、固定筛选区、清晰的危险操作确认。
4. 移动端使用横向标签/抽屉导航，避免固定侧栏挤压内容。
5. 减少内联样式，把颜色、间距、圆角、阴影沉淀为 CSS 变量。

## 与后端仓库的关系

后端 API 位于：

```text
https://github.com/AG521521/login
```

前端部署后需要确保后端 CORS 允许对应域名访问。

## 部署

推荐使用 Cloudflare Pages：

1. 连接本仓库。
2. 构建命令留空。
3. 输出目录选择仓库根目录。
4. 绑定自定义域名，例如 `login.agai.online`。

## 本次优化内容

- 新增 `shared.js`，集中 API 配置和通用安全工具。
- 移除前端本地保存考勤密码的逻辑。
- 对主要动态列表、公告、反馈、用户数据增加 HTML 转义。
- 给登录页、用户仪表盘和管理后台补充移动端响应式样式。
- 将部分 `alert()` 反馈改为 Toast。
- README 改为前端仓库真实说明。

