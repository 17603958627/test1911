var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
// 后台管理系统的路由
var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
var proRouter = require('./routes/pro');
var bannerRouter = require('./routes/banner');
var cartRouter = require('./routes/cart');
var orderRouter = require('./routes/order');
var addressRouter = require('./routes/address');
var commentRouter = require('./routes/comment');

// 后台接口的路由
var proApi = require('./api/pro');
var usersApi = require('./api/users');
var cartApi = require('./api/cart')

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
app.use(express.static(path.join(__dirname, 'uploads')));

// 后台管理系统的路由
app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/pro', proRouter);
app.use('/banner', bannerRouter);
app.use('/cart', cartRouter);
app.use('/order', orderRouter);
app.use('/address', addressRouter);
app.use('/comment', commentRouter);

// 后台接口路由
app.use('/api/pro', proApi);
app.use('/api/users', usersApi);
app.use('/api/cart', cartApi);
// app.use('/api/kind', kindApi);


// catch 404 and forward to error handler
app.use(function(req, res, next) {
    next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
    // set locals, only providing error in development
    res.locals.message = err.message;
    res.locals.error = req.app.get('env') === 'development' ? err : {};

    // render the error page
    res.status(err.status || 500);
    res.render('error');
});

module.exports = app;