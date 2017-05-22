var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

//登录路由
router.get("/login",function(req,res,next){
  res.render("users/login",{title:"登录页标题",content:"登录页内容"})
})
//注册路由
router.get("/reg",function(req,res,next){
   res.render("users/reg",{title:"注册页标题",content:"注册页内容"})
})
//注册路由
router.post("/reg",function(req,res,next){
  console.log(req.body);
})



router.get("/logout",function(req,res,next){
  res.redirect("/")//路由重定向 定向到首页
})

module.exports = router;
