---
title: express
date: 2025-09-02 20:10:39
author: 
categories: 
tags: 
cover: 
---

## Request 和 Response 对象详解

### Request 对象
表示 HTTP 请求，包含请求的所有信息。

- **req.accepts(types)**  
  检查请求是否接受指定的内容类型，返回最佳匹配或 false  
  **示例**：`req.accepts('json')` 返回 'json' 或 false
  **细节**：支持数组和字符串，按质量值(q)排序返回最佳匹配

- **req.acceptsCharsets(charset [, ...])**  
  返回客户端支持的第一个指定字符集
  **细节**：基于 `Accept-Charset` 头，如 `req.acceptsCharsets('utf-8', 'iso-8859-1')`

- **req.acceptsEncodings(encoding [, ...])**  
  返回客户端支持的第一个指定编码
  **细节**：基于 `Accept-Encoding` 头，如 `req.acceptsEncodings('gzip', 'deflate')`

- **req.acceptsLanguages(lang [, ...])**  
  返回客户端支持的第一个指定语言
  **细节**：基于 `Accept-Language` 头，如 `req.acceptsLanguages('en', 'zh')`

- **req.app**  
  当 callback 为外部文件时，用于访问 express 实例
  **细节**：可用于访问应用级别的设置和中间件


- **req.baseUrl**  
  获取路由当前安装的 URL 路径

- **req.body**  
  包含解析的请求体（需要 body-parser 中间件）
  **细节**：支持 JSON、URL-encoded、multipart 等格式，需配置相应中间件

- **req.cookies**  
  包含请求发送的 cookies（需要 cookie-parser 中间件）
  **细节**：自动解析 Cookie 头为 JavaScript 对象

- **req.fresh**  
  布尔值，检查请求是否"新鲜"（基于缓存验证头）
  **细节**：基于 If-None-Match 和 If-Modified-Since 头判断

- **req.stale**  
  布尔值，检查请求是否"陈旧"，与 req.fresh 相反

- **req.get(field)**  
  获取指定的 HTTP 请求头（不区分大小写）
  **细节**：如 `req.get('Content-Type')` 或 `req.get('user-agent')`

- **req.hostname**  
  获取主机名（从 Host 头中提取）
  **细节**：自动处理端口号，只返回主机名部分

- **req.ip**  
  获取客户端的 IP 地址
  **细节**：当启用信任代理时，返回最接近客户端的 IP

- **req.ips**  
  当信任代理设置启用时，包含客户端 IP 地址链。
  需在 Express 实例初始化时设置 `app.set('trust proxy', true)`，否则 `req.ips` 会返回空数组。
  **场景**：部署在 Nginx 等反向代理后的服务，需通过 `req.ips` 获取真实客户端 IP 链（如 `[客户端IP, 代理IP]`），而 `req.ip` 会返回代理服务器 IP。
  **细节**：信任代理可配置为布尔值、IP地址、子网或数组

- **req.is(type)**  
  检查请求的 Content-Type 是否匹配指定类型
  **细节**：支持 MIME 类型，如 req.is('application/json')

- **req.method**  
  获取 HTTP 请求方法（GET、POST、PUT、DELETE 等）
  **细节**：原始方法，不受中间件影响

- **req.originalUrl**  
  获取原始请求 URL
  **细节**：包含查询字符串，在中间件链中保持不变

- **req.params**  
  包含路由参数的对象（如 `/users/:id` 中的 id）
  **细节**：参数值总是字符串，可包含连字符和点号

- **~~req.param(name)~~**  
  获取参数的方法（已废弃，不推荐使用）
  **替代**：使用 req.params、req.body 或 req.query 替代

- **req.path**  
  获取请求的 URL 路径
  **细节**：不包含查询字符串，如 /users/profile

- **req.protocol**  
  获取协议类型（http 或 https）
  **细节**：当启用信任代理时，会考虑 `X-Forwarded-Proto` 头

- **req.query**  
  包含解析的查询字符串的对象
  **细节**：自动解析 URL 查询参数，支持数组和嵌套对象

- **req.range(size)**  
  解析 Range 请求头，返回请求的字节范围数组，失败时返回 `416 Requested Range Not Satisfiable`
  **细节**：用于断点续传和部分内容请求，返回对象包含 start、end 等属性

- **req.route**  
  获取当前匹配的路由信息
  **细节**：包含路径、方法、正则表达式等路由详细信息

- **req.secure**  
  布尔值，检查请求是否通过 TLS 发起（即 HTTPS）
  **细节**：等同于 `req.protocol === 'https'`

- **req.signedCookies**  
  包含签名 cookie（需要 cookie-parser 中间件）
  **细节**：使用 secret 签名，防止篡改，验证失败的 cookie 会被忽略

- **req.socket**  
  获取请求的 socket 对象
  **细节**：底层网络连接，可用于获取 TLS 信息等

- **req.subdomains**  
  获取子域名数组
  **细节**：顺序为从右到左，如 api.app.example.com 返回 ['api', 'app']

- **req.url**  
  获取请求的 URL（不包含协议、主机和端口）
  **细节**：包含查询字符串，在中间件中可能被修改

- **req.xhr**  
  布尔值，检查请求是否通过 XMLHttpRequest 发起（基于 `X-Requested-With: XMLHttpRequest` 头）。
  现代前端框架（如 React/Vue）的异步请求（如 Axios、Fetch）默认可能不携带该头，导致 `req.xhr` 误判为 `false`。
  **补充**：建议结合 `req.get('Accept')` 或自定义请求头（如 `X-Request-Type: ajax`）辅助判断，
  ```JavaScript
  const isAjax = req.xhr || req.get('X-Request-Type') === 'ajax' || req.get('Accept')?.includes('application/json');
  ```

### Response 对象
表示 HTTP 响应，用于向客户端发送响应。

- **res.append(field [, value])**  
  追加指定的 HTTP 头字段
  **细节**：同名字段会追加而不是覆盖，适用于 Set-Cookie 等头

- **res.attachment([filename])**  
  设置 Content-Disposition 头为 "attachment"，可选指定文件名
  **细节**：触发文件下载对话框，文件名自动编码

- **res.cookie(name, value [, options])**  
  设置 cookie  
  options: { domain, expires, httpOnly, maxAge, path, secure, signed }
  **细节**：maxAge 单位为毫秒，expires 为 Date 对象

- **res.clearCookie(name [, options])**  
  清除指定的 cookie

- **res.download(path [, filename] [, options] [, fn])**  
  传输文件作为附件下载
  **细节**：自动设置 Content-Disposition，支持断点续传

- **res.end([data] [, encoding])**  
  结束响应过程
  **细节**：必须调用以结束响应，否则连接会保持打开状态

- **res.format(object)**  
  根据请求的 Accept 头进行内容协商
  **细节**：支持基于 Accept 头的多格式响应
  ```JavaScript
  res.format({
    'text/plain': () => res.send('plain text'),
    'application/json': () => res.json({ message: 'json response' })
  });
  ```

- **res.get(field)**  
  获取指定的响应头字段

- **res.headersSent**  
  只读属性，检查响应头是否已发送
  **细节**：一旦头已发送，再设置头会抛出错误

- **res.json([body])**  
  发送 JSON 响应

- **res.jsonp([body])**  
  发送 JSONP 响应

- **res.links(links)**  
  设置 Link HTTP 头
  **细节**：用于 HTTP 链接头，支持分页等场景
  ```JavaScript
  res.links({
    next: 'http://api.example.com/users?page=2',
    last: 'http://api.example.com/users?page=5'
  });
  ```

- **res.location(path)**  
  设置 Location HTTP 头
  **细节**：用于重定向，支持相对和绝对路径

- **res.redirect([status,] path)**  
  重定向请求，状态码默认为 302
  **细节**：支持相对路径、绝对路径和命名路由

- **res.render(view [, locals] [, callback])**  
  渲染视图模板
  **细节**：支持多种模板引擎，locals 会与 res.locals 合并

- **res.send([body])**  
  发送 HTTP 响应（可接受 Buffer、String、Object、Array）

- **res.sendFile(path [, options] [, fn])**  
  传输文件并自动设置 Content-Type
  **路径安全问题**：确保传入的路径是受信任的，避免目录遍历攻击，若传入用户可控的路径（如 `res.sendFile(req.query.filePath)`），可能导致 “目录遍历攻击”（如用户传入 `../etc/passwd` 读取系统文件），使用 root 选项限制根目录：`res.sendFile('report.pdf', { root: '/path/to/safe/dir' })`；
  **细节**：支持 options: { root, headers, dotfiles, maxAge, ... }

- **res.sendStatus(statusCode)**  
  设置响应状态码并发送对应的状态消息，若后续再调用 `res.send()` 或 `res.json()`，会报错（因响应已结束）；
  **细节**：如 `res.sendStatus(404)` 发送 "Not Found"

- **res.set(field [, value])**  
  设置响应头（可传入对象设置多个头）

- **res.status(code)**  
  设置 HTTP 状态码
  **细节**：链式调用，如 `res.status(200).json({ data })`

- **res.type(type)**  
  设置 Content-Type 头的 MIME 类型
  **细节**：支持文件扩展名自动映射，如 `res.type('html')` 设置为 'text/html'

- **res.vary(field)**  
  设置 Vary HTTP 头

- **~~res.header()~~**  
  设置 HTTP 响应头（已废弃，推荐使用 res.set()）

- **~~res.charset~~**  
  设置字符集（已废弃，不推荐使用）
  **替代**：使用 `res.type('text/html; charset=utf-8')` 或 `res.set('Content-Type', 'text/html; charset=utf-8')`

### 使用注意事项

1. **废弃方法**：标记 ~~波浪线~~ 的方法表示已废弃，不建议在新项目中使用

2. **中间件依赖**：某些方法需要额外的中间件支持（如 body-parser、cookie-parser）

3. **执行顺序**：设置响应头应在发送响应体之前进行，否则会抛出错误

4. **响应结束**：res.end() 和 res.send() 等方法会结束响应，之后不能再修改响应

5. **错误处理**：建议使用 try-catch 或 Promise 处理可能的错误，特别是文件操作

6. **性能考虑**：避免在循环中频繁操作 response 对象，合理使用缓存

7. **安全考虑**：始终验证用户输入，防止路径遍历、注入等攻击

8. **编码问题**：明确设置字符集，避免乱码问题

建议参考 [Express.js 官方文档](https://expressjs.com/) 获取最新和最完整的信息。
express5.x API 文档 [https://expressjs.com/en/5x/api.html](https://expressjs.com/en/5x/api.html)