/*
 * @Description:
 * @Version: 1.0
 * @Autor: tu
 * @Date: 2023-03-13 14:28:00
 * @LastEditors: tu
 * @LastEditTime: 2023-03-17 13:00:33
 * @FilePath: /node/app.js
 */
// 导入 express 模块
const express = require('express')
// 创建 express 的服务器实例
const app = express()

// 导入 cors 中间件
const cors = require('cors')
// 将 cors 注册为全局中间件
app.use(cors())

// 导入并注册用户路由模块
const userRouter = require('./router/user')
app.use('/my', userRouter)

const uploadRouter = require('./router/upload')
app.use('', uploadRouter)

// 调用 app.listen 方法，指定端口号并启动web服务器
app.listen(3007, function () {
  console.log('api server running at http://127.0.0.1:3007')
})