/*
 * @Description:
 * @Version: 1.0
 * @Autor: tu
 * @Date: 2023-03-13 14:43:42
 * @LastEditors: tu
 * @LastEditTime: 2023-03-13 14:44:17
 * @FilePath: /node/db/index.js
 */
// 导入 mysql 模块
const mysql = require('mysql')

// 创建数据库连接对象
const db = mysql.createPool({
    host: '121.196.222.69:3306',
    user: 'xiao',
    password: 'tu1208..',
    database: 'xiao'
})

// 向外共享 db 数据库连接对象
module.exports = db
