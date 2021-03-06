var express = require('express');
var router = express.Router();
var sql = require('./../sql')
var Order = require('./../sql/col/orders')
var Cart = require('./../sql/col/carts')
var uuid = require('node-uuid')

// 查看订单
router.get('/', function(req, res, next) {
  // 获取订单的状态
  let status = req.query.status
  // 查询订单的信息 用户id和订单的id
  let findData = { userid: req.query.userid, orderid: req.query.orderid }
  if (status) { // 如果没有传值，那么查询全部的数据
    findData.status = status
  }
  sql.find(Order, findData, { _id: 0 }).then(data => {
    res.send({
      code: '200',
      message: '订单列表',
      len: data.length,
      data: data
    })
  })
});
//查询各种状态的订单
router.get('/allorder', function(req, res, next) {
  let status = req.query.status
  let findData = { userid: req.query.userid }
  if (status) {
    findData.status = status
  }
  sql.find(Order, findData, { _id: 0 }).then(data => {
    res.send({
      code: '200',
      message: '所有订单',
      len: data.length,
      data: data
    })
  })
});

// 评价的接口
router.get('/evaluate',function(req,res,next) {
  let orderid = req.query.orderid
  sql.find(Order,{orderid },{_id:0}).then( data => {
    res.send({
      code: '200',
      message: '待评价的订单',
      data: data
    })
  })
})


// 删除订单
router.get('/delete', function(req, res, next) {
  // 查询订单的信息 用户id和订单的id
  console.log('??del')
  let findData = { orderid: req.query.orderid }
  sql.delete(Order, findData).then(data => {
    res.send({
      code: '200',
      message: '删除成功'
    })
  })
});

//修改订单状态
router.get('/updatestatus', function(req, res, next) {
  let { orderid, status } = req.query
  sql.update(Order, {orderid}, { $set: { status: status }}).then(data => {
    res.send({
      code: '200',
      message: '修改状态成功'
    })
  })
});

// 修改订单
router.get('/addinfo', (req, res, next) => {
  let { name, tel ,address } = req.query
  let note = req.query.note || ''
  sql.update(Order, { orderid: req.query.orderid }, { $set: {name, tel, address, note }}).then(data => {
    res.send({
      code: '200',
      message: '地址添加至订单'
    })
  })
})
// 生成订单删除购物车
router.get('/add', (req, res, next) => {
  var now = new Date();
  var year = now.getFullYear(); //得到年份
  var month = now.getMonth();//得到月份
  var date = now.getDate();//得到日期
  month = month + 1;
  if (month < 10) month = "0" + month;
  if (date < 10) date = "0" + date;
  var time = "";
  time = year + "-" + month + "-" + date;
  // 1、获取前端提交的订单数据 "[{},{},{}]" -- 转成对象
  let list = JSON.parse(req.query.str)
  let userid = req.query.userid // 获取用户id
  let orderid = 'order_' + uuid.v1() // 生成订单的id
  let num = req.query.num
  let price = req.query.price
  let arr = [] // 订单列表数据
  list.map(item => { // 遍历数据，获取订单的信息
    arr.push({
      proid: item.proid,
      proimg: item.proimg,
      proname: item.proname,
      price: item.price * 1,
      num: item.num * 1
    })
  })
  // 插入数据库
  sql.insert(Order, {
    orderid: orderid,
    userid: userid,
    status: 0, // 订单状态 0 待付款 1 待收货（已支付） 2 待评价
    name: '',
    tel: '',
    address: '',
    note: '',
    num,
    price,
    createtime:time,
    list: arr
  }).then(() => {
    // 生成订单后要删除购物车的数据
    let p1 = list.map(item => {
      return sql.delete(Cart, { cartid: item.cartid })
    })
    return Promise.all(p1)
  }).then(() => {
    res.send({
      code: '200',
      message: '生成订单',
      data: { // 用于在确认订单页面 查询订单的信息
        orderid: orderid
      }
    })
  })
})
module.exports = router;
