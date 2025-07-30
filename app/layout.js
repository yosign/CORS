export const metadata = {
  title: 'CORS 代理服务',
  description: '一个简单的 CORS 代理服务，解决跨域请求问题',
}

export default function RootLayout({ children }) {
  return (
    <html lang="zh-CN">
      <body>{children}</body>
    </html>
  )
} 