const models = require('./db');
const express = require('express');
const router = express.Router();

/************** 创建(create) 读取(get) 更新(update) 删除(delete) **************/

router.get('/home/querygood',(req,res) => {
    // 通过模型去查找数据库
    models.store.find({}, function (err,data) {
        console.log(112)
        if (err) {
            res.send(err);
        } else {
            res.send(data);
        }
    });
});

router.get('/explore/queryexplore',(req,res) => {
    // 通过模型去查找数据库
    models.explore.find({}, function (err,data) {
        if (err) {
            res.send(err);
        } else {
            res.send(data);
        }
    });
});

module.exports = router;