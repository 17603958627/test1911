var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  // res.send('respond with a resource');
  res.render('users', { 
    activeIndex: 2
   }) // ++++++++ 将当前的路由跟 页面匹配起来
});

module.exports = router;
