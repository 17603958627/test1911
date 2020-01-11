const mongoose = require('../db.js'); // 引入数据库连接模块
const Schema = mongoose.Schema; // 拿到当前数据库相应的集合对象

// 设计用户表的集合
const commentSchema = new Schema({ // 设计用户集合的字段以及数据类型
  commentid: {type: String },
  userid: { type: String },
  proid: { type: String },
  text: { type: String }, //评论内容
  rating: { type: Number }, //评分
  username: {type: String},
  num: { type: Number },
  price: { type: Number },
  proimg: {type: String},
  createtime:{ type: String}, // 发布时间
  proname: {type: String},
  createtime:{ type: String}, // 发布时间
  file: {type: String},// 头像信息
  flag: {type: String}//好、中、差评
})

module.exports = mongoose.model('Comment', commentSchema);
