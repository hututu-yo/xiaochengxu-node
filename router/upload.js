/*
 * @Description: 
 * @Version: 1.0
 * @Autor: tu
 * @Date: 2023-03-17 12:22:11
 * @LastEditors: tu
 * @LastEditTime: 2023-03-18 20:57:59
 * @FilePath: /node/router/upload.js
 */
const express = require('express')
// 创建路由对象
const router = express.Router()
const multer = require("multer")


const storage = multer.memoryStorage()
const upload = multer({ storage: storage })


// 导入 upload 模块
const uploadHandler = require('../router_handler/upload')


// 导入文件: upload.single("file")  "file"对应上传字段名
router.post("/upload", upload.single("file"), uploadHandler.uploadFile)

// 将路由对象共享出去
module.exports = router
