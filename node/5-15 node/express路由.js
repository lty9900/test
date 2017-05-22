/**
 * Created by Administrator on 2017/5/15.
 */

/*
*   express 路由
*       没有 express 时
 *       通过 url 模块 通过req.url 获取 pathname 属性
 *       服务端判断 pathname 不同，来执行相应的操作
*
* */
var express = require("express");
var app = express();
//根据请求路径的不同来处理，客户端默认使用 get 请求
/*
*   app.get();
*   参数一：要处理的路径
*   参数二：请求处理的回调函数
*       回到函数中参数：   参数一 ：req 请求的相关信息
*                       参数二 ：res 响应的响应信息
*
* */

app.get("/",function(req,res){

    res.send("神不神奇");
})
app.listen(7777,function(){
    console.log("7777 listen to success");
})
