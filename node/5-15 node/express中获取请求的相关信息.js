/**
 * Created by Administrator on 2017/5/15.
 */
/*
*   没有 express 我们通过什么方法获得请求的信息
*   通过 url 模块 url.parse(req.url,true);
*   pathname 获取路径
*   query 获取参数
* */
var express = require("express");
var app = express();
 app.get("*",function(req,res){
     console.log(req.url);//req.url 获取url
     console.log(req.path); //req.path  获取路径
     console.log(req.query);//req.query 获取参数
     res.send("*")
 })
app.listen(5554,function(){
    console.log("5554 listen to success");
})