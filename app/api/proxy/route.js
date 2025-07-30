import { NextRequest, NextResponse } from 'next/server';

/**
 * CORS 代理服务
 * 支持所有 HTTP 方法 (GET, POST, PUT, DELETE 等)
 * 自动处理跨域请求头
 */

// 设置 CORS 响应头
function setCorsHeaders(response) {
  response.headers.set('Access-Control-Allow-Origin', '*');
  response.headers.set('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS, HEAD, PATCH');
  response.headers.set('Access-Control-Allow-Headers', 'Content-Type, Authorization, X-Requested-With, Accept, Origin, X-Api-Key, X-Auth-Token');
  response.headers.set('Access-Control-Max-Age', '86400');
  return response;
}

// 处理 OPTIONS 预检请求
export async function OPTIONS(request) {
  const response = new NextResponse(null, { status: 200 });
  return setCorsHeaders(response);
}

// 处理所有其他 HTTP 方法
export async function GET(request) {
  return handleProxy(request);
}

export async function POST(request) {
  return handleProxy(request);
}

export async function PUT(request) {
  return handleProxy(request);
}

export async function DELETE(request) {
  return handleProxy(request);
}

export async function PATCH(request) {
  return handleProxy(request);
}

export async function HEAD(request) {
  return handleProxy(request);
}

async function handleProxy(request) {
  try {
    // 从查询参数中获取目标 URL
    const { searchParams } = new URL(request.url);
    const targetUrl = searchParams.get('url');
    
    if (!targetUrl) {
      const response = NextResponse.json(
        { 
          error: '缺少目标 URL 参数',
          usage: '请在查询参数中提供 url 参数，例如: /api/proxy?url=https://example.com/api'
        }, 
        { status: 400 }
      );
      return setCorsHeaders(response);
    }

    // 验证 URL 格式
    let parsedUrl;
    try {
      parsedUrl = new URL(targetUrl);
    } catch (urlError) {
      const response = NextResponse.json(
        { error: '无效的 URL 格式' }, 
        { status: 400 }
      );
      return setCorsHeaders(response);
    }

    // 准备代理请求的配置
    const proxyHeaders = {};
    
    // 复制请求头，但排除一些不应该转发的头
    const excludeHeaders = ['host', 'origin', 'referer', 'x-forwarded-for', 'x-forwarded-proto'];
    request.headers.forEach((value, key) => {
      if (!excludeHeaders.includes(key.toLowerCase())) {
        proxyHeaders[key] = value;
      }
    });

    // 设置 User-Agent
    proxyHeaders['User-Agent'] = 'CORS-Proxy/1.0';

    const proxyOptions = {
      method: request.method,
      headers: proxyHeaders,
    };

    // 如果有请求体，添加到代理请求中
    if (request.method !== 'GET' && request.method !== 'HEAD') {
      const body = await request.arrayBuffer();
      if (body.byteLength > 0) {
        proxyOptions.body = body;
      }
    }

    // 发送代理请求
    const proxyResponse = await fetch(targetUrl, proxyOptions);
    
    // 获取响应内容
    const responseBody = await proxyResponse.arrayBuffer();
    
    // 创建响应，保持原始状态码
    const response = new NextResponse(responseBody, {
      status: proxyResponse.status,
      statusText: proxyResponse.statusText,
    });

    // 复制响应头
    proxyResponse.headers.forEach((value, key) => {
      // 跳过一些不应该复制的头
      if (!['content-encoding', 'transfer-encoding'].includes(key.toLowerCase())) {
        response.headers.set(key, value);
      }
    });

    // 添加 CORS 头
    return setCorsHeaders(response);

  } catch (error) {
    console.error('Proxy error:', error);
    
    const response = NextResponse.json(
      { 
        error: '代理请求失败',
        details: error.message 
      }, 
      { status: 500 }
    );
    return setCorsHeaders(response);
  }
} 