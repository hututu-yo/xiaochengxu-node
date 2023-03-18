/*
 * @Description: 
 * @Version: 1.0
 * @Autor: tu
 * @Date: 2023-03-17 12:22:11
 * @LastEditors: tu
 * @LastEditTime: 2023-03-18 20:51:05
 * @FilePath: /node/router/upload.js
 */
const express = require('express')
// 创建路由对象
const router = express.Router()
const multer = require("multer")

// 导入处理文件的第三方模块
const ossUpload = require('../utils/oss-upload')

const storage = multer.memoryStorage()
const upload = multer({ storage: storage })

// 导入文件: upload.single("file")  "file"对应上传字段名
router.post("/upload", upload.single("file"), async (req, res) => {
  // 获取文件名
  const filename = (req.file.originalname || 'test.png').split(".")
  // req.file.originalname  =>  ["test", "png"] 
  // 后缀名
  const suffix = filename.pop()

  // 生成随机文件名
  const randomName = filename.join(".") + "_" + Math.random().toString(36).substring(2) + "." + suffix

  // 根据文件类型区分文件夹
  const path = req.file.mimetype + "/" + randomName
  // req.file.mimetype => image/png 
  try {

    const ret = await ossUpload.put(path, req.file.buffer)
    res.send({
      code: 200,
      data: ret.url,
      msg: "上传成功"
    })
  } catch (error) {
    res.send({
      code: 0,
      data: error,
      msg: "上传失败"
    })

  }
})

// 将路由对象共享出去
module.exports = router
