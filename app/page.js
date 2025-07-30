export default function Home() {
  return (
    <div style={{ 
      maxWidth: '800px', 
      margin: '0 auto', 
      padding: '40px 20px',
      fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',
      lineHeight: '1.6'
    }}>
      <h1 style={{ color: '#2563eb', marginBottom: '20px' }}>CORS 代理服务</h1>
      
      <p style={{ fontSize: '18px', marginBottom: '30px' }}>
        这是一个简单的 CORS 代理服务，帮助你解决跨域请求问题。
      </p>

      <div style={{ 
        backgroundColor: '#f8fafc', 
        padding: '20px', 
        borderRadius: '8px',
        border: '1px solid #e2e8f0',
        marginBottom: '30px'
      }}>
        <h2 style={{ marginTop: '0', color: '#374151' }}>使用方法</h2>
        
        <h3 style={{ color: '#6b7280', fontSize: '16px' }}>基本用法：</h3>
        <code style={{ 
          backgroundColor: '#1f2937',
          color: '#f9fafb',
          padding: '10px',
          borderRadius: '4px',
          display: 'block',
          marginBottom: '15px',
          fontSize: '14px'
        }}>
          {typeof window !== 'undefined' ? window.location.origin : 'https://your-domain.vercel.app'}/api/proxy?url=目标网址
        </code>

        <h3 style={{ color: '#6b7280', fontSize: '16px' }}>示例：</h3>
        <code style={{ 
          backgroundColor: '#1f2937',
          color: '#f9fafb',
          padding: '10px',
          borderRadius: '4px',
          display: 'block',
          marginBottom: '15px',
          fontSize: '14px'
        }}>
          {typeof window !== 'undefined' ? window.location.origin : 'https://your-domain.vercel.app'}/api/proxy?url=https://jsonplaceholder.typicode.com/posts/1
        </code>

        <h3 style={{ color: '#6b7280', fontSize: '16px' }}>JavaScript 中使用：</h3>
        <pre style={{ 
          backgroundColor: '#1f2937',
          color: '#f9fafb',
          padding: '15px',
          borderRadius: '4px',
          overflow: 'auto',
          fontSize: '14px'
        }}>
{`// GET 请求
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
.then(data => console.log(data));`}
        </pre>
      </div>

      <div style={{ 
        backgroundColor: '#fef2f2', 
        padding: '20px', 
        borderRadius: '8px',
        border: '1px solid #fecaca',
        marginBottom: '30px'
      }}>
        <h3 style={{ marginTop: '0', color: '#dc2626' }}>注意事项</h3>
        <ul style={{ color: '#7f1d1d' }}>
          <li>此代理服务仅用于开发和测试目的</li>
          <li>请不要用于生产环境的敏感数据传输</li>
          <li>目标 URL 必须是有效的 HTTP/HTTPS 地址</li>
          <li>某些网站可能有反爬虫机制，可能会拒绝代理请求</li>
        </ul>
      </div>

      <footer style={{ 
        textAlign: 'center', 
        color: '#6b7280', 
        fontSize: '14px',
        borderTop: '1px solid #e5e7eb',
        paddingTop: '20px'
      }}>
        <p>CORS Proxy Service - 部署在 Vercel</p>
      </footer>
    </div>
  );
} 