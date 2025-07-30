/** @type {import('next').NextConfig} */
const nextConfig = {
  // 启用 App Router
  experimental: {
    appDir: true,
  },
  
  // 优化构建
  poweredByHeader: false,
  
  // API 路由配置
  async headers() {
    return [
      {
        // 为所有 API 路由添加基础 CORS 头
        source: '/api/:path*',
        headers: [
          {
            key: 'Access-Control-Allow-Origin',
            value: '*',
          },
          {
            key: 'Access-Control-Allow-Methods',
            value: 'GET, POST, PUT, DELETE, OPTIONS, HEAD, PATCH',
          },
          {
            key: 'Access-Control-Allow-Headers',
            value: 'Content-Type, Authorization, X-Requested-With, Accept, Origin',
          },
        ],
      },
    ];
  },
};

module.exports = nextConfig; 