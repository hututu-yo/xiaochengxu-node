

// 导入 OSS 模块
const ossUpload = require('../utils/oss-upload')
//  导入文件上传模块
exports.uploadFile = async (req, res) => {
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
    return res.success({
      data: ret.url,
      result: "上传成功"
    })
  } catch (error) {
    res.send({
      data: error,
      message: "上传失败"
    })

  }
}