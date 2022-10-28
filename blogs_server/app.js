// 引入express模块
const express = require('express')
const app = express()


// 跨域
app.all("*",function(req,res,next){
    //设置允许跨域的域名，*代表允许任意域名跨域
    res.header("Access-Control-Allow-Origin","*");
    //允许的header类型
    res.header("Access-Control-Allow-Headers","Origin,X-Requested-With,Accept,Content-type");
    res.header("Access-Control-Allow-Credentials",true);
    //跨域允许的请求方式
    res.header("Access-Control-Allow-Methods","PUT,POST,GET,DELETE,OPTIONS");
    res.header("Content-Type","application/json;charset=utf-8")
    if (req.method.toLowerCase() == 'options')
      res.sendStatus(200);  //让options尝试请求快速结束
    else
    next();
});

const cors = require('cors')
app.use(cors())
// 解析表单数据
app.use(express.urlencoded({ extended: false }))

// 响应数据
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

// 错误处理
app.use((err,req,res,next)=>{
    res.err(err)
})



// 启动路由服务器
app.listen(2244, () => {
    console.log('api server runing at http://127.0.0.1:2244');
})
