/*
 * @Description:
 * @Version: 1.0
 * @Autor: tu
 * @Date: 2023-03-13 14:32:27
 * @LastEditors: tu
 * @LastEditTime: 2023-03-17 12:33:25
 * @FilePath: /node/router/user.js
 */
const express = require('express')
// 创建路由对象
const router = express.Router()

const bodyParser = require('body-parser');

// 对不同的路由使用不同的内容类型来解析

// 创建 application/json 解析
const jsonParser = bodyParser.json();

// 创建 application/x-www-form-urlencoded解析
const urlencodedParser = bodyParser.urlencoded({
  extended: false
});

// 创建 application/form-data 解析
const rawParser = bodyParser.raw({
  type: 'application/form-data'
});


// 注册新用户
router.post('/reguser', jsonParser, (req, res) => {
  res.send(req.body)
})

// 登录
router.post('/login', jsonParser, (req, res) => {
  res.send('login OK')
})

// 将路由对象共享出去
module.exports = router
