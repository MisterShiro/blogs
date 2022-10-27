const express = require('express')
const router = express.Router()
const db = require('../db/index')

// 获取文章列表

const getActicleSql = "SELECT * FROM article"
router.get('/getActicle', (req, res) => {
    db.query(getActicleSql, (err, results) => {
        if (err) return res.err(err)
        res.results(results)
    })
})

module.exports = router
