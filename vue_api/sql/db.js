/**
 * 连接数据库
 */
const mongoose = require('mongoose'); // 引入模块
// mongoose.Promise = global.Promise;  
const DB_URL = "mongodb://localhost:27017/sh1911"; // 数据库连接地址以及连接到哪

// 连接数据库
mongoose.connect(DB_URL, { useNewUrlParser: true });

// 连接成功
mongoose.connection.on('connected', () => {
    console.log('数据库连接成功');
})

// 连接失败断开
mongoose.connection.on('disconnected', () => {
    console.log('数据库断开');
})

// 连接错误
mongoose.connection.on('error', () => {
    console.log('数据库连接异常');
})

module.exports = mongoose;