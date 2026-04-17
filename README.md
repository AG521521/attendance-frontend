# 智能考勤系统

> 全栈自动化签到服务平台，支持订阅管理、定时签到、邮件通知、VIP 会员体系【仅开源了前端代码】
访问官网:https://login.agai.online/

## ✨ 功能特性

- 🔐 学号登录（免注册），JWT 身份认证
- 📅 自定义签到订阅（每天/工作日/指定星期）
- 🤖 自动定时签到（Python 异步脚本）
- 📧 VIP 邮件通知（签到成功/失败）
- 👑 管理后台（用户管理、卡密生成、代签到）
- 🎫 卡密兑换 VIP 系统

## 🛠 技术栈

| 类型 | 技术 |
|------|------|
| 前端 | HTML5 + CSS3 + JavaScript（原生） |
| 后端 | Node.js + Express |
| 数据库 | MongoDB Atlas + Mongoose |
| 爬虫 | Python + asyncio + aiohttp |
| 部署 | Railway + Cloudflare Pages + Workers |

## 🚀 快速开始

### 环境要求
- Node.js 18+
- Python 3.8+
- MongoDB Atlas 账号

### 安装运行
\`\`\`bash
# 克隆项目
git clone https://github.com/AG521521/attendance-frontend.git
cd attendance-api

# 安装依赖
npm install
pip install -r requirements.txt

# 配置环境变量
cp .env.example .env
# 编辑 .env 文件，填入 MONGODB_URI, JWT_SECRET, RESEND_API_KEY

# 启动服务
npm start
\`\`\`

## 📁 项目结构
\`\`\`
├── server.js              # Node.js 主程序
├── attendance_runner.py   # Python 签到脚本
├── package.json           # Node 依赖
├── requirements.txt       # Python 依赖
├── railway.json           # Railway 部署配置
├── index.html             # 登录页
├── dashboard.html         # 用户仪表盘
└── admin.html             # 管理后台
\`\`\`

## 📄 开源协议
MIT License
