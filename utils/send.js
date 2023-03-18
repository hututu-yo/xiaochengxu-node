/*
 * @Description: 
 * @Version: 1.0
 * @Autor: tu
 * @Date: 2023-03-18 21:03:48
 * @LastEditors: tu
 * @LastEditTime: 2023-03-18 21:16:10
 * @FilePath: /node/utils/send.js
 */
// res.send() 成功处理函数
exports.success = (req, res, next) => {
  res.success = function ({ data, result, code = 200 }) {
    res.send({
      code,
      data: data,
      result
    })
  }
  next()
}
// res.send() 失败处理函数 
exports.fail = (req, res, next) => {
  res.fail = function ({ data, message, code = 0 }) {
    res.send({
      code,
      data: data,
      message
    })
  }
  next()
}