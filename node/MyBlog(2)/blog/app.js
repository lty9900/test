//  1  所需模块
var express = require('express');   //   第三方web 框架
var path = require('path');        //  path 模块 用来处理路径
var favicon = require('serve-favicon');   //  是用来处理 ico 文件
var logger = require('morgan');          //  mongran  是用来写日志
var cookieParser = require('cookie-parser'); //  解析  cookie 的相关信息  使用该模块以后获取cookie  直接用req.cookies 设置cookie  直接使用  res.cookie
var bodyParser = require('body-parser'); //  用来处理 post请求   获取请求体信息   直接通过 req.body 拿到请求体参数

//引入 session 模块
var session = require("express-session");
// 引入 session 保存在数据库的模块
var mongoStore = require("connect-mongo")(session);//这里出了错了
//引入 flash 模块 是用来 给用户提示信息的
var flash = require("connect-flash");

// 2 路由
var index = require('./routes/index');  //  首页的路由
var users = require('./routes/users');  //  用户页
var article = require("./routes/article") //  文章路由

var app = express();

// view engine setup
//  设置模板引擎文件的根路径
app.set('views', path.join(__dirname, 'views'));
//   设置模板引擎文件的类型
app.set('view engine', 'html');
app.engine("html",require("ejs").__express); // 使用ejs 来渲染html 模板引擎文件

// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());   //   使用cookieparse 模块
//  设置静态资源文件很路径
app.use(express.static(path.join(__dirname, 'public')));
app.use(session({
  resave:true,
  secret:"come",
  saveUninitialized:true,
  //将 seccion 和数据库进行关联 数据连接出错
  store:new mongoStore({
    url:"mongodb://localhost:27017/db75"
  })
}))
//使用 flash 模块
app.use(flash());

//声明中间件,将所有路由中的公共操作提取出来 放到公共中间件中执行
app.use(function(req,res,next){
  res.locals.user = req.session.user;//将用户信息传到各个页面
  res.locals.success = req.flash("success");//将成功的信息保存在 success
  res.locals.error = req.flash("error");//将错误的信息保存在 error
  next();//一定要写 不写后续代码不执行
})

// 使用路由
app.use('/', index);  //  当用户访问 / 路径 进入 index 首页路由
app.use('/users', users); //   当用户访问 /users  进入users 用户路由
app.use("/article",article) //   当用户访问文章路由是  进入article路由容器
// catch 404 and forward to error handler
/*
    当所有路由的都没有时候  设置错误状态404

 */
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
