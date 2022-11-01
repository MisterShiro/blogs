const express = require('express')
const router = express.Router()
const db = require('../db/index')

const fs = require('fs')
const multer = require('multer')

// 添加文章
let upload = multer({ dest: 'uploads/' })
router.post('/addArticle',upload.single('image'), (req, res) => {
    res.results(req.file)
})
// 获取文章列表
const getActicleSql = "SELECT * FROM article"
router.post('/getArticle', (req, res) => {
    db.query(getActicleSql, (err, results) => {
        if (err) return res.err(err)
        res.results(results)
    })
})

module.exports = router
