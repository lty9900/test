/**
 * Created by Administrator on 2017/5/9.
 */
//http 模块 ：创建服务，监听端口，根据请求的 url 路径，执行相应的操作
var http = require("http");

/*
*   createServer 创建服务 参数：监听函数(客户端向服务端发送的请求 和服务端返回给客户端的数据)
*
*   request 请求 ：客户端向服务端请求的信息
*   response 响应 ：服务端向客户端响应的信息
*
*   listen 监听端口
*       参数一 ： 端口号
*       参数二 ：回调方法 在端口监听成功的时候执行的回调函数
* */

var sever = http.createServer(function(req,res){

    //console.log(req);
    //console.log(res);
    //console.log("成功监听到请求");
    var str = req.url;
    res.end(str);
});
//console.log(http);
sever.listen(7777,function(){
    console.log(77777);
});
