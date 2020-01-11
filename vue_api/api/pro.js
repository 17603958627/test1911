var express = require('express');
var router = express.Router();
var Pro = require('../sql/col/pros');
var sql = require('../sql');
var uuid = require('node-uuid')

/** 产品相关的接口 */
/**
 * @api {get} /api/pro 获取产品列表接口
 * @apiDescription 列表
 * @apiName /api/pro
 * @apiGroup pro
 * @apiParam {number} pageCode 页码（从0开始）
 * @apiParam {number} limitNum 每页显示个数（默认为10）
 * @apiSuccess {json} data
 * @apiSuccessExample {json} Success-Response:
 * // 没有更多数据了
 * {
 *  code: '10000',
 *  message: '没有更多数据了'
 * }
 * // 正常
 * {
 *    code: '200',
 *    message: '获取产品的数据',
 *    length: data.length, // 获取到多少条数据
 *    data: data // 获取到的数据
 *  }
 * @apiSampleRequest http://localhost:3000/api/pro
 * @apiVersion 1.0.0
 */
router.get('/', function(req, res, next) {
    let { pageCode, limitNum } = req.query; // 获取页码和每页显示个数
    sql.paging(Pro, {}, { _id: 0 }, pageCode, limitNum).then(data => {
      if (data.length === 0) { // 如果没有数据
        res.send({
          code: '10000',
          message: '没有更多数据了'
        })
      } else { // 有数据
        res.send({
          code: '200',
          message: '获取产品的数据',
          length: data.length, // 获取到多少条数据
          data: data // 获取到的数据
        })
      }
    })
  });

  /**
 * @api {get} /api/pro/all 获取所有产品接口
 * @apiDescription 所有商品
 * @apiName /api/pro/all
 * @apiGroup pro
 * @apiSuccess {json} data
 * @apiSuccessExample {json} Success-Response:
 * // 没有更多数据了
 * {
 *  code: '10000',
 *  message: '没有更多数据了'
 * }
 * // 正常
 * {
 *    code: '200',
 *    message: '获取产品的数据',
 *    length: data.length, // 获取到多少条数据
 *    data: data // 获取到的数据
 *  }
 * @apiSampleRequest http://localhost:3000/api/pro/all
 * @apiVersion 1.0.0
 */
router.get('/all', function(req, res, next) {
  sql.find(Pro, {}, { _id: 0 }).then(data => {
    if (data.length === 0) { // 如果没有数据
        res.send({
          code: '10000',
          message: '没有更多数据了'
        })
      } else { // 有数据
        res.send({
          code: '200',
          message: '获取产品的数据',
          length: data.length, // 获取到多少条数据
          data: data // 获取到的数据
        })
      }
  })
});

/**
 * @api {get} /api/pro/sort 产品排序
 * @apiDescription 产品排序
 * @apiName /api/pro/sort
 * @apiGroup pro
 * @apiParam {string} type 排序规则（price 价格 / stock 库存 / sales 销量 / rating  评分/ flag 推荐）
 * @apiParam {number} num 升序还是降序（num 1 升序）
 * @apiSuccess {json} data
 * @apiSuccessExample {json} Success-Response:
 * // 没有更多数据了
 * {
 *  code: '10000',
 *  message: '没有更多数据了'
 * }
 * // 正常
 * {
 *    code: '200',
 *    message: '获取产品的数据',
 *    length: data.length, // 获取到多少条数据
 *    data: data // 获取到的数据
 *  }
 * @apiSampleRequest http://localhost:3000/api/pro/sort
 * @apiVersion 1.0.0
 */
router.get('/sort', (req, res, next) => {
  let { type, flag } = req.query; 
  flag *= 1
  sql.sort(Pro, {}, { _id: 0 }, { [type]: flag }).then(data => {
    if (data.length === 0) { // 如果没有数据
      res.send({
        code: '10000',
        message: '没有更多数据了'
      })
    } else { // 有数据
      res.send({
        code: '200',
        message: '获取产品的数据',
        length: data.length, // 获取到多少条数据
        data: data // 获取到的数据
      })
    }
  })
})

/**
 * @api {get} /api/pro/category 产品分类
 * @apiDescription 产品分类
 * @apiName /api/pro/category
 * @apiGroup pro
 * @apiParam {string} type 商品的分类
 * @apiSuccess {json} data
 * @apiSuccessExample {json} Success-Response:
 * {
 *    code: '200',
 *    message: '获取产品的分类',
 *    data: ['', ''] 
 *  }
 * @apiSampleRequest http://localhost:3000/api/pro/category
 * @apiVersion 1.0.0
 */
router.get('/category', (req, res, next) => {
    let { type } = req.query;
    sql.distinct(Pro, 'type').then(data => {
      res.send({
        code: '200',
        message: '获取产品的分类',
        data
      })
    })
  })

/**
 * @api {get} /api/pro/categorylist 获取大分类下的数据
 * @apiDescription 获取大分类下的数据
 * @apiName /api/pro/categorylist
 * @apiGroup pro
 * @apiParam {string} type 商品的分类
 * @apiSuccess {json} data
 * @apiSuccessExample {json} Success-Response:
 *  res.send({
      code: '200',
      message: '分类列表',
       data: {
          "__v": 0,
          "type": "苹果",
          "proname": "",
          "proimg": "",
          "price": ,
          "stock": 1000,
          "sales": 50,
          "rating": 5,
          "flag": 0,
          "note": "",
          "detail": "",
          "proid": "pro_d245ee20-0c40-11ea-9bb7-f90a52a739bb",
          "zj": ""
      }
    })
 * @apiSampleRequest http://localhost:3000/api/pro/categorylist
 * @apiVersion 1.0.0
 */

  router.get('/categorylist', (req, res, next) => {
    let { type } = req.query;
    sql.find(Pro, { type }, { _id: 0 }).then(data => {
      res.send({
        code: '200',
        message: '获取产品的数据',
        data: data
      })
    })
  })

  /**
   * @api {get} /api/pro/detail 产品详情
   * @apiDescription 产品详情
   * @apiName /api/pro/detail
   * @apiGroup pro
   * @apiParam {string} proid 产品id
   * @apiSuccess {json} data
   * @apiSuccessExample {json} Success-Response:
   * {
   *    code: '200',
   *    message: '获取产品的详情数据',
   *    data: {
   *  "__v": 0,
          "type": "苹果",
          "proname": "荣耀20",
          "proimg": "",
          "price": 2299,
          "stock": 1000,
          "sales": 50,
          "rating": 5,
          "flag": 0,
          "note": "",
          "detail": "",
          "proid": "pro_d245ee20-0c40-11ea-9bb7-f90a52a739bb",
          "zj": ""
      }
   * }
   *  }
   * @apiSampleRequest http://localhost:3000/api/pro/detail
   * @apiVersion 1.0.0
   */
  router.get('/detail', (req, res, next) => {
    let { proid } = req.query
    let obj = []
    let zj =  'pro_' + uuid.v1()
    sql.find(Pro, {proid}, { _id: 0}).then(data => {
      obj.push(zj)
      obj.push(data[0].proid)
      obj.push(data[0].proname)
      obj.push(data[0].proimg)
      res.send({
        code: '200',
        message: '获取产品的详情数据',
        data: data[0],
        obj
      })
    })
  })

/**
   * @api {get} /api/pro/findd 产品
   * @apiDescription 产品
   * @apiName /api/pro/findd
   * @apiGroup pro
   * @apiParam {string} proid 产品id
   * @apiSuccess {json} data
   * @apiSuccessExample {json} Success-Response:
   * {
   *   "data": [
        {
            "_id": "5deef2a72eeaf52c4c2c2960",
            "__v": 0,
            "proid": "pro_20962911-1aeb-11ea-a4c1-ffafc37b3253",
            "proname": "芒橙柑柚",
            "price": 34,
            "detail": "重庆忠县柑橘忠橙爱媛38号果冻",
            "title": "水果新鲜包邮当季整箱9斤",
            "stock": 3423,
            "sales": 121,
            "proimg": "https://g-search3.alicdn.com/img/bao/uploaded/i4/i3/3015214310/O1CN014ZY5U61hi1cKEq4qv_!!0-item_pic.jpg_360x360Q90.jpg_.webp",
            "activity": 1,
            "pintuan": 0,
            "type": "橙子",
            "mail": 1
        },
        {
            "_id": "5e001e57ae7e8633dc06eb49",
            "__v": 0,
            "proid": "pro_20962911-1aeb-11ea-a4c1-ffafc37b3253"
        },
        {
            "_id": "5e001e5fae7e8633dc06eb4a",
            "__v": 0,
            "proid": "pro_20962911-1aeb-11ea-a4c1-ffafc37b3253"
        },
        {
            "_id": "5e001e60ae7e8633dc06eb4b",
            "__v": 0,
            "proid": "pro_20962911-1aeb-11ea-a4c1-ffafc37b3253"
        },
        {
            "_id": "5e001e60ae7e8633dc06eb4c",
            "__v": 0,
            "proid": "pro_20962911-1aeb-11ea-a4c1-ffafc37b3253"
        },
        {
            "_id": "5e001e61ae7e8633dc06eb4d",
            "__v": 0,
            "proid": "pro_20962911-1aeb-11ea-a4c1-ffafc37b3253"
        },
        {
            "_id": "5e001e62ae7e8633dc06eb4e",
            "__v": 0,
            "proid": "pro_20962911-1aeb-11ea-a4c1-ffafc37b3253"
        },
        {
            "_id": "5e001e87b619dd23d4d32f64",
            "__v": 0,
            "proid": "pro_20962911-1aeb-11ea-a4c1-ffafc37b3253"
        }
    ]
}
   * @apiSampleRequest http://localhost:3000/api/pro/findd
   * @apiVersion 1.0.0
   */
  router.get('/findd', (req, res, next) => {
    let {proid} = req.query
    sql.find(Pro, {proid}).then((data) => {
      res.send({
        code: 200,
        message: '产品',
        data
      })
    })
  })
  module.exports = router;
  