var express = require('express');
var router = express.Router();
var sql = require('./../sql')
var Address = require('./../sql/col/address')
var uuid = require('node-uuid')



/* 获取默认地址. */
router.get('/defaultaddress', function(req, res, next) {
  let { userid} = req.query
  let flag = 1
  sql.find(Address, { userid, flag }, { _id: 0 }).then(data => {
    if (data.length === 0) {
      res.send({
        code: '30000',
        message: '没有默认地址'
      })
    } else {
      res.send({
        code: '200',
        message: '获取地址',
        data: data
      })
    }
  })
});

/* 获取所有地址. */
router.get('/', function(req, res, next) {
  let { userid } = req.query
  sql.find(Address, { userid }, { _id: 0 }).then(data => {
    if (data.length === 0) {
      res.send({
        code: '30000',
        message: '没有地址'
      })
    } else {
      res.send({
        code: '200',
        message: '获取地址',
        data: data
      })
    }
    
  })
});
// 查询地址
router.get('/select', function(req, res, next) {
  let { addressid } = req.query
  sql.find(Address, { addressid }, { _id: 0 }).then(data => {
      res.send({
        code: '200',
        message: '查询地址',
        data: data
      })
  })
});
// 添加地址
router.post('/add', (req, res, next) => {
  let { userid, name, tel, addressDetail, flag, province, city, county, postalCode, areaCode } = req.body
  flag = flag * 1 || 0
  if(flag == 1){
    sql.update(Address, { userid, flag: 1 }, { $set: {flag: 0} }).then(() => {
      console.log("修改默认地址");
       
  let addressid = 'address_' + uuid.v1()
  sql.insert(Address, { userid, name, tel, addressDetail, flag, province, city, county, postalCode, areaCode, addressid }).then(() => {
    res.send({
      code: '200',
      message: '添加地址成功'
    })
  })
    })
  } else {
    console.log("diyitiao");
    sql.find(Address, { userid }, { _id: 0 }).then(data => {
    console.log(data);
      if (data.length === 0) {
        console.log("??");
        flag = 1
      }
      let addressid = 'address_' + uuid.v1()
      sql.insert(Address, { userid, name, tel, addressDetail, flag, province, city, county, postalCode, areaCode, addressid }).then(() => {
      res.send({
      code: '200',
      message: '添加地址成功'
    })
  })
    })
  }
  console.log(name,tel,flag);
 
})
//修改默认地址
router.post('/updatedefault', (req, res, next) => {
  let { userid, addressid } = req.body
  sql.update(Address, { userid, flag: 1 }, { $set: { flag: 0 } }).then(() => {
    console.log("修改默认地址成功0");
    sql.update(Address, { addressid }, { $set: { flag: 1 } }).then(() => {
      console.log("修改默认地址成功1");
    })
  })
})

// 修改地址
router.post('/update', (req, res, next) => {
  let { addressid, userid, name, tel, addressDetail, flag, province, city, county, postalCode, areaCode } = req.body
  flag = flag * 1 || 0
  if(flag == 1){
    sql.update(Address, { userid, flag: 1 }, { $set: {flag: 0} }).then(() => {
      console.log("修改默认地址");
    })
  }
  sql.update(Address, {addressid}, { $set:{name: name, tel: tel, addressDetail: addressDetail, flag: flag, province: province, city: city, county: county, postalCode: postalCode, areaCode: areaCode } }).then(() => {
    res.send({
      code: '200',
      message: '修改地址成功'
    })
  })
})
// 删除地址
router.post('/delete', (req, res, next) => {
  let { addressid } = req.body
  sql.delete(Address, { addressid }).then(() => {
    res.send({
      code: '200',
      message: '删除地址成功'
    })
  })
})
module.exports = router;
