 //所需模块
var express = require('express');//第三方 web 框架
var path = require('path');//（路径） 路径处理模块
var favicon = require('serve-favicon');//是用来处理 ico 文件的
var logger = require('morgan');//写日志模块
var cookieParser = require('cookie-parser');//解析 cookie 的相关信息 使用该模块以后获取 cookie 直接用 req.cookie 设置 cookie 直接使用 res.cookie
var bodyParser = require('body-parser');//用来处理 post请求 获取请求体信息 直接通过 req.body 拿到请求体参数
//路由
var index = require('./routes/index');//首页的路由
var users = require('./routes/users');//用户页的路由
 var article = require("./routes/article");//文章路由

var app = express();


  //设置模版引擎文件的根路径
app.set('views', path.join(__dirname, 'views'));
 //设置 模版引擎文件的类型
app.set('view engine', 'html');
app.engine("html",require("ejs").__express);//使用 ejs 来渲染 html 模版引擎文件

// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());// 设置 cookieparse 模块
 //设置静态资源文件的根路径
app.use(express.static(path.join(__dirname, 'public')));
//使用路由
app.use('/', index);//当用户访问 /路径  进入 index 首页路由
app.use('/users', users);//当用访问/users 进入 users 路由
app.use('/article',article);//当用户访问文章路由 进入 article 路由
// catch 404 and forward to error handler
 //当上面所有路由都不没有时候 返回的错误状态是404
app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
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
