var express = require('express');
var router = express.Router();
var uuid = require('node-uuid');
var Pro = require('./../sql/col/pros');
// var sql = require('./../sql/index')
var sql = require('./../sql')
const xlsx = require('node-xlsx');
/* GET users listing. */

// 查看数据
router.get('/', function(req, res, next) {
    // 1、查询数据库中产品的数据
    sql.find(Pro, {}, { _id: 0 }).then(data => {
        // 2、渲染页面，传递参数
        res.render('pro', {
            activeIndex: 3,
            data
        })
    })
});

// 跳转到添加产品页面
router.get('/add', function(req, res, next) {
    res.render('pro_add', { activeIndex: 3 })
});
// 提交添加产品
router.post('/addAction', (req, res, next) => {
    let obj = req.body
    obj.proid = 'pro_' + uuid.v1(); // uuid.v1();生成唯一码
    obj.price *= 1;
    obj.stock *= 1;
    obj.sales *= 1;
    obj.activity *= 1;
    obj.select *= 1;
    obj.freeship *= 1;
    obj.newgoods *= 1;
    sql.insert(Pro, obj).then(() => {
        // 5、跳转回列表页面 --- 重定向
        res.redirect('/pro');
    })
})

// 删除产品
router.get('/delete', (req, res, next) => {
    //1、获取删除的产品的标识  ---- proid
    let proid = req.query.proid
        // 2、删除数据
    sql.delete(Pro, { proid }).then(() => {
        // 3/重定向看列表
        res.redirect('/pro')
    })
})

// 跳转到更新产品页面
router.get('/update', function(req, res, next) {
    let { proid } = req.query; // 获取更新的数据
    sql.find(Pro, { proid }, { _id: 0 }).then(data => { // 查询数据库
        res.render('pro_update', { // 给页面传递数据
            activeIndex: 3,
            proid: proid, // proid
            type: data[0].type, // type
            proname: data[0].proname, // proname
            price: data[0].price, // price
            detail: data[0].detail, // detail
            stock: data[0].stock, // stock
            sales: data[0].sales, // sales
            proimg: data[0].proimg, // proimg
            activity: data[0].activity, // activity
            select: data[0].select, // select
            freeship: data[0].freeship, // freeship
            newgoods: data[0].newgoods // newgoods
                // id 分类	标题	价格	详情	库存	销量	图片地址	是否秒杀 是否精选	是否包邮 是否新品
        })
    })
});

// 提交更新产品
router.post('/updateAction', (req, res, next) => {
    // 1.获取前端提交的数据 --- 对象obj
    let obj = req.body
        // 2、纠正数据的数据类型
    obj.price *= 1; // 价格
    obj.stock *= 1; // 库存
    obj.sales *= 1; // 销量
    obj.activity *= 1;
    obj.select *= 1;
    obj.freeship *= 1;
    obj.newgoods *= 1;
    // res.send(obj)
    // 3、获取更新的依据
    let proid = obj.proid;
    // 4、更新数据库
    sql.update(Pro, { proid }, { $set: obj }).then(() => {
        // 5、跳转回列表页面 --- 重定向
        res.redirect('/pro');
    })
})

// 导入数据
router.get('/upload', (req, res, next) => {
    // 1、确定数据表格的路径  ---   电脑的绝对路径
    let fileStr = 'D:/vue/NC/vue_api/data.xlsx';
    // 2、解析这个文件
    let fileData = xlsx.parse(fileStr)
    let proarr = fileData[0].data
    let arr = []
    proarr.map((item, index) => {
            if (index > 0) {
                arr.push({
                    proid: 'pro_' + uuid.v1(),
                    type: item[0],
                    proname: item[1],
                    price: item[2] * 1,
                    detail: item[3],
                    stock: item[4] * 1,
                    sales: item[5] * 1,
                    proimg: item[6],
                    activity: item[7] * 1,
                    select: item[8] * 1,
                    freeship: item[9] * 1,
                    newgoods: item[10] * 1
                })
            }
        })
        // res.send(arr)
        // 5、插入数据库
    sql.insert(Pro, arr).then(() => {
        // 6、重定向
        res.redirect('/pro')
    })
})

// 排序路由 /pro/sort?type=price&flag=1  /pro/sort?type=price&flag=-1
router.get('/sort', (req, res, next) => {
    // 1、接收排序的字段以及排序的规则
    let { type, flag } = req.query
    flag *= 1;
    // 2、调用数据库 {[type]: flag} ==> { price: 1} / { sales: 1}
    sql.sort(Pro, {}, { _id: 0 }, {
        [type]: flag
    }).then(data => {
        // 3、渲染页面，传递参数
        res.render('pro', {
            activeIndex: 3,
            data
        })
    })
})

router.get('/category', function(req, res, next) {
    // 1、查询数据库中产品的数据
    let { type } = req.query
    sql.find(Pro, { type }, { _id: 0 }).then(data => {
        // 2、渲染页面，传递参数
        res.send({
            code: '200',
            message: '分类',
            data: data
        })
    })
});

router.get('/search', (req, res, next) => {
    let { text } = req.query
    sql.find(Pro, { proname: eval('/' + text + '/') }, { _id: 0 }).then(data => {
        res.send({
            code: '200',
            message: '搜索列表',
            data: data
        })
    })
})
module.exports = router;