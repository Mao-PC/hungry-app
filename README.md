# hungry-app

>一个Vue.js和MongoDB写的简单的webApp

## Build Setup
1. 搭建nodeJs环境
2. 安装MongoDB并启动服务
3. 链接MongoDB服务，执行下列脚本导入MongoDB数据：
```bash
use store
db.createCollection("explore")
db.explore.insertMany([
    /* 1 */
    {
        "_id" : ObjectId("5a9e447ad6f52ecc205f947f"),
        "title" : "比特币被爆重大安全漏洞",
        "date" : "2018-03-03"
    },
    
    /* 2 */
    {
        "_id" : ObjectId("5a9e449dd6f52ecc205f948a"),
        "title" : "今年两会马化腾说了什么",
        "date" : "2018-04-31"
    },
    
    /* 3 */
    {
        "_id" : ObjectId("5a9e44c1d6f52ecc205f9493"),
        "title" : "如何向小白讲述产品架构发展历史",
        "date" : "2018-03-03"
    },
    
    /* 4 */
    {
        "_id" : ObjectId("5a9e44ddd6f52ecc205f949d"),
        "title" : "为什么12306要获取这么多的权限?",
        "date" : "2018-03-03"
    },
    
    /* 5 */
    {
        "_id" : ObjectId("5a9e450ed6f52ecc205f94b4"),
        "title" : "阿里程序员相亲被拒",
        "date" : "2018-03-03"
    },
    
    /* 6 */
    {
        "_id" : ObjectId("5a9e4544d6f52ecc205f94c3"),
        "title" : "90后创以太币狂赚9000亿",
        "date" : "2018-03-03"
    },
    
    /* 7 */
    {
        "_id" : ObjectId("5a9e4569d6f52ecc205f94d1"),
        "title" : "盘点17年Python发生的几件大事",
        "date" : "2018-03-03"
    },
    
    /* 8 */
    {
        "_id" : ObjectId("5a9e457cd6f52ecc205f94d8"),
        "title" : "阿里程序员相亲被拒(2)",
        "date" : "2018-03-03"
    },
    
    /* 9 */
    {
        "_id" : ObjectId("5a9e459ad6f52ecc205f94e2"),
        "title" : "新浪创'星轨新词'",
        "date" : "2018-03-03"
    },
    
    /* 10 */
    {
        "_id" : ObjectId("5a9e45a6d6f52ecc205f94e9"),
        "title" : "新浪创'星轨新词90'(2",
        "date" : "2018-03-03"
    },
    
    /* 11 */
    {
        "_id" : ObjectId("5a9e45b1d6f52ecc205f94ee"),
        "title" : "新浪创'星轨新词'(3)",
        "date" : "2018-03-03"
    }
])
db.createCollection("stores")
db.stores.insertMany([
    /* 1 */
    {
        "_id" : ObjectId("5a9e499cd6f52ecc205f95f2"),
        "name" : "XXXX",
        "grade" : 4.5,
        "price" : 309,
        "description" : "这是XXXXX"
    },
    
    /* 2 */
    {
        "_id" : ObjectId("5a9e49a2d6f52ecc205f95f5"),
        "name" : "XXXX",
        "grade" : 4.5,
        "price" : 309,
        "description" : "这是XXXXX"
    },
    
    /* 3 */
    {
        "_id" : ObjectId("5a9e49a7d6f52ecc205f95f8"),
        "name" : "XXXX",
        "grade" : 4.5,
        "price" : 309,
        "description" : "这是XXXXX"
    },
    
    /* 4 */
    {
        "_id" : ObjectId("5a9e49acd6f52ecc205f95fb"),
        "name" : "XXXX",
        "grade" : 4.5,
        "price" : 309,
        "description" : "这是XXXXX"
    },
    
    /* 5 */
    {
        "_id" : ObjectId("5a9e49b2d6f52ecc205f95ff"),
        "name" : "XXXX",
        "grade" : 4.5,
        "price" : 309,
        "description" : "这是XXXXX"
    },
    
    /* 6 */
    {
        "_id" : ObjectId("5a9e49b8d6f52ecc205f960b"),
        "name" : "XXXX",
        "grade" : 4.5,
        "price" : 309,
        "description" : "这是XXXXX"
    }
])
```
4. clone 代码
5. 使用命令行工具cd 到项目目录下，执行下列命令
```bash
npm i
npm run dev
```
6. cd 到 server 目录，执行：
```bash
node index
```
7. 打开浏览器访问localhost:8080
