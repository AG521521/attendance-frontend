```markdown
# AG工作室 · 智能考勤系统

## 📖 项目简介

智能考勤系统是一套面向高校学生的自动化签到服务平台。用户通过 Web 端登录后，可创建自定义签到任务，系统在指定时间自动执行签到，并通过邮件推送签到结果。项目采用前后端分离架构，部署于云平台，支持高并发和水平扩展。

- 🌐 官网地址：[https://login.agai.online](https://login.agai.online)
- 📧 客服邮箱：support@agai.online

## ✨ 功能特性

### 用户端
- 🔐 **学号登录**：免注册，输入学号即可使用
- 📅 **签到订阅**：支持每天/工作日/自定义星期，灵活配置
- 🤖 **自动签到**：定时任务自动执行，无需手动操作
- 📧 **邮件通知**：VIP 用户签到成功/失败后自动发送邮件
- 🎫 **卡密兑换**：支持 VIP 卡密兑换，延长会员有效期
- 👥 **邀请好友**：双方各得 VIP 天数，激励用户推广
- 📝 **留言反馈**：用户可提交问题和建议，管理员回复

### 管理端
- 📊 **数据仪表盘**：用户统计、签到成功率、VIP 数量等
- 👤 **用户管理**：查看/编辑/删除用户，管理员代签到
- 💬 **留言管理**：查看用户反馈，回复并标记状态
- 🎫 **卡密管理**：批量生成/导出卡密
- 🔔 **通知设置**：自定义仪表盘公告内容
- 🛒 **支付管理**：卡密在线购买（V免签接入）

## 🛠 技术栈

| 层级 | 技术 | 说明 |
|------|------|------|
| 前端 | HTML5 + CSS3 + JavaScript | 原生开发，响应式设计 |
| 后端 | Node.js + Express | RESTful API，JWT 认证 |
| 数据库 | MongoDB Atlas | 云数据库，Mongoose ODM |
| 爬虫 | Python + asyncio + aiohttp | 异步并发签到脚本 |
| 网关 | Cloudflare Workers | CORS 处理，边缘计算 |
| 部署 | Railway + Cloudflare Pages | 云平台托管，自动部署 |
| 邮件 | Resend API | 验证码与签到通知 |
| 支付 | V免签 | 个人免签约支付 |
| 实时通信 | Socket.io | WebSocket 支付推送 |

## 🚀 快速开始

### 环境要求
- Node.js 18+
- Python 3.11+
- MongoDB Atlas 账号
- Cloudflare 账号

### 安装与运行

```bash
# 克隆仓库
git clone https://github.com/AG521521/attendance-api.git
cd attendance-api

# 安装 Node.js 依赖
npm install

# 安装 Python 依赖
pip install -r requirements.txt

# 配置环境变量
# 创建 .env 文件，填入以下内容：
# MONGODB_URI=你的MongoDB连接字符串
# JWT_SECRET=你的JWT密钥
# RESEND_API_KEY=你的Resend API Key
# PAYMENT_SECRET=你的支付密钥

# 启动服务
npm start
```

### 前端部署

前端文件（`index.html`、`dashboard.html`、`admin.html`）部署在 Cloudflare Pages 上，绑定自定义域名 `login.agai.online`。

### 环境变量说明

| 变量名 | 说明 | 必填 |
|--------|------|------|
| `MONGODB_URI` | MongoDB Atlas 连接字符串 | ✅ |
| `JWT_SECRET` | JWT 签名密钥 | ✅ |
| `RESEND_API_KEY` | Resend 邮件服务 API Key | ❌ |
| `PAYMENT_SECRET` | V免签支付通信密钥 | ❌ |

## 📁 项目结构

```
├── server.js              # Node.js 后端主程序
├── package.json           # Node.js 依赖配置
├── attendance_runner.py   # Python 签到脚本
├── requirements.txt       # Python 依赖
├── nixpacks.toml          # Railway 部署配置
├── index.html             # 登录页
├── dashboard.html         # 用户仪表盘
├── admin.html             # 管理后台
├── favicon.ico            # 网站图标
└── README.md              # 项目说明
```

## 🏗 系统架构

```
用户浏览器
    │
    ▼
Cloudflare Pages（前端静态托管）
    │
    ▼
Cloudflare Workers（API 网关 / CORS 处理）
    │
    ▼
Railway（Node.js 后端 + Python 脚本）
    │
    ▼
MongoDB Atlas（云数据库）
```

## 🎯 核心亮点

### 1. 接口逆向与反爬虫对抗
通过抓包分析微信小程序接口，逆向还原 Token 生成算法（MD5 + Base64 组合签名）与请求参数加密逻辑。Python 脚本采用 asyncio 异步并发架构，配合 UA 轮换、随机延时、GPS 坐标偏移等策略，成功绕过反爬机制。

### 2. Cloudflare Workers 边缘计算
引入 Cloudflare Workers 作为独立网关层，在边缘节点直接处理 OPTIONS 预检请求并添加 CORS 响应头，解决跨域问题，同时可用于 API 网关、限流、日志记录。

### 3. 分布式定时任务与订阅调度
基于 node-cron 实现每日定时签到，根据用户自定义规则动态筛选，通过 child_process.spawn 调用 Python 脚本执行批量签到。

### 4. VIP 会员与支付体系
设计完整的 VIP 会员体系，支持邮箱绑定赠送、卡密兑换、在线购买（V免签）三种获取方式。支付成功后通过 WebSocket 实时推送卡密。

## 📝 许可证

本项目采用 MIT 许可证。

## 👨‍💻 作者

AG工作室

- 🌐 官网：[https://login.agai.online](https://login.agai.online)
- 📧 邮箱：support@agai.online
- 🐙 GitHub：[https://github.com/AG521521](https://github.com/AG521521)
```

---
