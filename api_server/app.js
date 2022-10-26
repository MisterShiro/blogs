// 引入express模块
const express = require('express')
const app = express()

// 配置cors跨域
const cors = require('cors')
app.use(cors())
// 解析表单数据
app.use(express.urlencoded({ extended: false }))

// 响应数据的中间件
app.use((req, res, next) => {
    res.err = function (err) {
        res.send({
            code: 1,
            message: err instanceof Error ? err.message : err,
        })
    }
    next()
})
app.use((req, res, next) => {
    res.results = function (data) {
        res.send({
            code: 0,
            message: 'Data request successful!',
            data:data
        })
    }
    next()
})

// 导入路由模块
const homeRouter = require('./router/home')
app.use('/home', homeRouter)

// 错误级别中间件
app.use((err,req,res,next)=>{
    console.log('错误级别中间件');
})

// 启动路由服务器
app.listen(2244, () => {
    console.log('api server runing at http://127.0.0.1:2244');
})
