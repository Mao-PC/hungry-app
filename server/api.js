const models = require('./db');
const express = require('express');
const router = express.Router();

/************** 创建(create) 读取(get) 更新(update) 删除(delete) **************/

router.get('/home/querygood',(req,res) => {
    // 通过模型去查找数据库
    models.store.find({}, function (err,data) {
        if (err) {
            res.send(err);
        } else {
            res.send(data);
        }
    });
});

router.get('/explore/queryexplore',(req,res) => {
    let query = req.query;
    if (query) {
        query.pageIndex = query.pageIndex || 1
        query.pageSize = query.pageSize || 5
    } else {
        query = {
            pageIndex: 1,
            pageSize: 5
        }
    }
    let skip = query.pageSize * (query.pageIndex-1)
    // 通过模型去查找数据库
    let resp = models.explore.find({}).skip(skip).limit(parseInt(query.pageSize))
    resp.exec((err, data) => {
        res.send(data)
        // setTimeout(() => {
        // }, 1000);
    })
});

module.exports = router;