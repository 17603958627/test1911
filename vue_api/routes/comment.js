var express = require('express');
const sql = require('../sql')
const Comment = require('../sql/col/comments')
const User = require('../sql/col/users')
const uuid = require('node-uuid');
const utils = require('./../utils');
var router = express.Router();

// 获取评论信息列表
router.get('/', function(req, res, next) {
  let { proid } = req.query;
  let arr = []
  let comment = []
  // 内部包含用户的信息，通过用户id 获取到所有的用户名，对应的相关评论，拼接数据
  sql.find(Comment, { proid }, { _id: 0 }).then(data => {
    comment = data
    // console.log(data)
    var promises = data.map((item, index) => {
        return sql.find(User, { userid: item.userid }, { _id: 0 })
    })
    // console.log(promises)
    return Promise.all(promises)
  }).then(list => {
    // console.log('list', list)
    list.map((item,index) => {
      arr.push({
        commentid: comment[index].commentid,
        username: item[0].username,
        text: comment[index].text,
        rating: comment[index].rating,
        file: comment[index].file,
        flag: comment[index].flag,
        time: comment[index].createtime
      })
    })
    res.send({
      code: '200',
      data: arr
    })
  })
});

router.post('/add', (req, res, next) => {
  var now = new Date();
       var year = now.getFullYear(); //得到年份
       var month = now.getMonth();//得到月份
       var date = now.getDate();//得到日期
       month = month + 1;
       if (month < 10) month = "0" + month;
       if (date < 10) date = "0" + date;
       var time = "";
       time = year + "-" + month + "-" + date;
  let { userid, rating } = req.body;
  rating = rating * 1 || 5
  let list = JSON.parse(req.body.info)
  for (let item of list) {
    item.userid = userid,
    item.commentid = 'comment_' + uuid.v1()
    item.rating = rating
    item.createtime = time
  }
  console.log(list)
    sql.insert(Comment, ...list).then(() => {
      res.send(utils.commentsuccess)
    })
})
// router.post('/add',(req, res, next) => {
//   let { userid, rating } = req.body
//   rating = rating *1 || 5
//   let list = JSON.parse(req.query.)
// })
module.exports = router;
