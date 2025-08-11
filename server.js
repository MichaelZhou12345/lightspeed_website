// server.js

const express = require('express');
const path = require('path');
const app = express();
const PORT = 8080;

// 设置静态文件目录
app.use(express.static(path.join(__dirname, '20250804t112345')));

// 处理根路径请求，返回 index.html
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, '20250804t112345', 'index.html'));
});

// 处理未匹配的路由，返回 404 页面
app.use((req, res) => {
  res.status(404).send('404 Not Found');
});

// 启动服务器
app.listen(PORT, () => {
  console.log(`✅ Server is running at http://localhost:${PORT}`);
});
