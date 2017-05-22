/**
 * Created by Administrator on 2017/5/15.
 */
/*
*   中间件：
*       中间件是处理 http 请求的函数，用来完成特定的任务，例如：检查用户登录，检测用户的访问权限
*    特点：
*       1.一个中间件处理完请求和响应的数据可以再传递给下一个中间件
*       2.回调函数 next 表示其他中间件的调用，表示将请求数据传递给下一个中间件
*       3.还可以根据路径来执行不同的中间件
* */
var express = require("express");
var app = express();
//中间件
/*
*   express 中间件 是 使用 app.use() 来调用
*       参数一：请求的路径
*       参数二：回调方法
*               回调方法中的三个参数：
*                   req,res next
*                       next 是一个函数 只有调用 next 后续代码才会执行
* */
app.use("/",function(req,res,next){
    console.log("中间件执行");
    next();//调用 next 方法 程序才会向后执行
})
app.get("/",function(req,res){
    res.send("这个就是路由！！！！！！！！?????");
})
/*
*
* */
app.listen(3333,function(){
    console.log("3333 listen to success");
})