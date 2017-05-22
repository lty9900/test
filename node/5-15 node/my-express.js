/**
 * Created by Administrator on 2017/5/15.
 */
//引入 express 模块
var express = require("express");
var app = express();// 声明变量 app  可以调用 express 的各种方法
/*
*   app 其实就是 http 服务的监听函数
* */
app.listen(9999,function(){
    console.log("9999 listen to success");
})
