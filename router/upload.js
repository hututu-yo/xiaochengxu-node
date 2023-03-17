const express = require('express')
// 创建路由对象
const router = express.Router()


// 导入处理文件的第三方模块
const ossUpload = require('../utils/oss-upload')


const bodyParser = require('body-parser');

// 创建 application/form-data 解析
const rawParser = bodyParser.raw({
  limit: '50mb',
  type: 'multipart/form-data'
});

// 创建 application/json 解析
const jsonParser = bodyParser.json();


// 导入文件
router.post('/upload', rawParser, (req, res) => {
  // ossUpload.put('test.png', req.body)
  //  获取二进制文件流名称
  const filename = req.body.toString().split(';')[2].split('=')[1].split('"')[1] || 'test.png'
  // 随机生成文件名
  const randomName = Math.random().toString(36).substr(2) + '+' + filename
  ossUpload.put(randomName, req.body)
  res.send(req.body)
})



// 将路由对象共享出去
module.exports = router
