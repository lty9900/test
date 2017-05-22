var express = require('express');
var router = express.Router();

var userModel = require("../mongodb/db").userModel;
var md5 = require("../md5/md5");
//权限管理
var auth = require("../minddleware/auth");
/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});


//  注册路由
//获取用注册页
router.get("/reg",function(req,res,next){
   res.render("users/reg",{title:"注册页标题",content:"注册页内容"});
})
// 注册路由
router.post("/reg",function(req,res){
  var userInfo = req.body;
//    将用户密码进行加密
    userInfo.password  = md5(userInfo.password);
/*
*   将注册用户数据放到数据库中
*       1.用户之前注册过 -- 不能注册
*       2.用户之前没有注册 -- 可以注册
* */
userModel.findOne(userInfo,function(err,doc){
    if(!err){
        /*
        *   1.用户找到的时候 不能注册
        *   2.用户没有找到 可以注册
        * */
        if(doc){
            req.flash("error","该用户已经注册，请更换用户名");
            //console.log("该用户已经注册，请更换用户名");
           res.redirect("back");
        }else{
            //没有用户信息
            //创建用户信息
            userModel.create(userInfo,function(err,doc){
                if(!err){
                    req.flash("success","注册成功")
                    console.log(doc);
                    res.redirect("/users/login");
                }else{
                    req.flash("error","注册失败");
                     res.redirect("back");
                }
            })
        }
    }else{
        req.flash("error","注册失败，请重新注册");
        //console.log("注册失败，请重新注册");
        res.redirect("back");
    }
})

})


//  登录路由
router.get("/login",function(req,res,next){
    res.render("users/login",{title:"登录页标题",content:"登录页内容"});
})
//登陆页数据提交的路由
router.post("/login",function(req,res){
    //获取登陆页提交上来的数据
    var userInfo = req.body;
    //将登陆密码 加密
    userInfo.password = md5(userInfo.password);
    userModel.findOne(userInfo,function(err,doc){
        if(!err){
            /*
            *   有用户信息 登录
            *   没有用户信息 注册
            * */
            if(doc){
                req.flash("success","登录成功")
                //console.log("登录成功");
                    req.session.user = doc;//将用户信息保存到 session 中
                    res.redirect("/");//登录成功

            }else{
                req.flash("error","登录失败");
                console.log("登录失败");
                res.redirect("back");
            }
        }else{
            req.flash("error","登录失败");
            console.log("登录失败");
            res.redirect("back");
        }
    })
})

//  退出路由
router.get("/logout",function(req,res,next){
    req.flash("success","退出成功");
    req.session.user = null;//退出的时候将用户信息清空
    res.redirect("/")     //  路由重定向   定向到首页

})




module.exports = router;
