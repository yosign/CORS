# CORS 代理服务

一个简单的 CORS 代理服务，基于 Next.js 构建，可以直接部署到 Vercel。

## 功能特性

- ✅ 支持所有 HTTP 方法 (GET, POST, PUT, DELETE, OPTIONS, HEAD, PATCH)
- ✅ 自动处理跨域请求头
- ✅ 请求头转发和过滤
- ✅ 错误处理和状态码保持
- ✅ 简洁易用的 API 接口
- ✅ 内置使用说明页面

## 快速开始

### 在线使用

直接访问部署后的服务：

```
https://你的域名.vercel.app/api/proxy?url=目标网址
```

### 本地开发

1. 克隆项目
```bash
git clone https://github.com/yosign/CORS.git
cd CORS
```

2. 安装依赖
```bash
npm install
```

3. 启动开发服务器
```bash
npm run dev
```

4. 访问 http://localhost:3000

## 使用方法

### 基本用法

```
GET /api/proxy?url=https://jsonplaceholder.typicode.com/posts/1
```

### JavaScript 示例

```javascript
// GET 请求
fetch('/api/proxy?url=https://api.example.com/data')
  .then(response => response.json())
  .then(data => console.log(data));

// POST 请求
fetch('/api/proxy?url=https://api.example.com/data', {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json',
  },
  body: JSON.stringify({ key: 'value' })
})
.then(response => response.json())
.then(data => console.log(data));
```

## 部署到 Vercel

### 方法一：通过 Vercel 控制台

1. 在 [Vercel](https://vercel.com) 注册并登录
2. 点击 "New Project"
3. 导入此 GitHub 仓库
4. 点击 "Deploy"

### 方法二：通过 Vercel CLI

```bash
npm i -g vercel
vercel --prod
```

## 注意事项

- 此代理服务仅用于开发和测试目的
- 请不要用于生产环境的敏感数据传输
- 目标 URL 必须是有效的 HTTP/HTTPS 地址
- 某些网站可能有反爬虫机制，可能会拒绝代理请求

## 技术栈

- [Next.js 14](https://nextjs.org/) - React 框架
- [Vercel](https://vercel.com/) - 部署平台

## 许可证

MIT License 