// 导入sql模块
const mysql = require('mysql')


// 创建数据库连接对象
const db = mysql.createPool({
    host: '127.0.0.1',
    user: 'root',
    password: '123465',
    database: 'blogs',
})

// 向外共享db数据库对象
module.exports = db
