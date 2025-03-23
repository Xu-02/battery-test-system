# 电池性能测试系统

基于AI的电池性能测试系统，提供电池测试、数据分析、部门管理等功能。

## 功能特点

- 用户认证和授权
- 部门管理
- 电池测试数据采集
- 测试结果分析
- 产品测试数据管理
- 实时数据监控

## 登录信息

默认管理员账号：
- 用户名：admin
- 密码：admin123

## 本地开发环境设置

1. 克隆项目：
```bash
git clone https://github.com/[您的GitHub用户名]/battery-test-system.git
cd battery-test-system
```

2. 安装依赖：
```bash
npm install
```

3. 运行开发服务器：
```bash
npm run dev
```

4. 构建生产版本：
```bash
npm run build
```

5. 启动生产服务器：
```bash
npm start
```

## GitHub Pages部署

1. 修改package.json中的homepage字段，将[您的GitHub用户名]替换为您的GitHub用户名

2. 构建并部署到GitHub Pages：
```bash
npm run deploy
```

3. 在GitHub仓库设置中启用GitHub Pages：
   - 进入仓库设置
   - 找到"Pages"选项
   - 在"Source"中选择"gh-pages"分支
   - 保存设置

4. 等待几分钟后，您的应用将在 https://[您的GitHub用户名].github.io/battery-test-system 上线

## 技术栈

- Next.js
- React
- Ant Design
- ECharts
- TypeScript 