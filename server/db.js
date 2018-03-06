// Schema、Model、Entity或者Documents的关系请牢记，Schema生成Model，Model创造Entity，Model和Entity都可对数据库操作造成影响，但Model比Entity更具操作性。
const mongoose = require('mongoose');
// 连接数据库 如果不自己创建 默认test数据库会自动生成
// mongoose.connect( 'mongodb://localhost:27017/store');
// mongoose.connect( 'mongodb://10.11.115.36:27017/store');

// 为这次连接绑定事件
const store = mongoose.createConnection('mongodb://10.11.115.36:27017/store');

store.once('error',() => console.log('store connection error'));
store.once('open',() => console.log('store connection successed'));

// const explore = mongoose.createConnection('mongodb://localhost:27017/explore');

// explore.once('error',() => console.log('explore connection error'));
// explore.once('open',() => console.log('explore connection successed'));

/************** 定义模式Schema **************/
const storeSchema = mongoose.Schema({
    name : String,
    grade : Number,
    price : Number,
    description : String
}, {collection: 'stores'});

const exploreSchema = mongoose.Schema({
    title : String,
    date : String,
}, {collection: 'explore'});

/************** 定义模型Model **************/
const Models = {
    store : store.model('store',storeSchema, 'stores'),
    explore : store.model('explore',exploreSchema, 'explore')
}
// const Models = {
//     store : store.model('store',storeSchema),
//     explore : explore.model('explore',exploreSchema)
// }

module.exports = Models;