/**
 * Created by Administrator on 2017/5/10.
 */

//引入所需模块
var http = require("http");
var fs = require("fs");
var url = require("url");

//创建服务
var sever = http.createServer(function(req,res){
    //解析 url 路径
    var urlObj = url.parse(req.url,true);
    //获取请求路径
    var pathname = urlObj.pathname;
    //获取参数
    var query = urlObj.query;
    //判断路径是不是 index.html
    /*if(pathname == "/index.html"){
        //读取文件
        var indexPage = fs.readFileSync("."+pathname,"utf8");
        //返回数据
        res.end(indexPage);
        //设置响应头信息
        res.writeHead(200,{"content-type":"text/html;charset=utf-8"})

    }

    if(pathname == "/css/index.css"){
        //读取文件
        var indexPage = fs.readFileSync("."+pathname,"utf8");
        //设置响应头信息
        res.writeHead(200,{"content-type":"text/css;charset=utf-8"})
        //返回数据
        res.end(indexPage)
    }

    if(pathname == "/js/index.js"){
        //读取文件
        var indexPage = fs.readFileSync("."+pathname,"utf8");
        //设置响应头信息ss
        res.writeHead(200,{"content-type":"application/javascript;charset=utf-8"})
        //返回数据
        res.end(indexPage)
    }*/
  //try{}catch(err){} 捕获异常
    try{
        //可能会出现问题的代码
        var indexPage =  fs.readFileSync("."+pathname,"utf8");
        res.end(indexPage);
    }catch(err){
        res.end("not fild");
    }
})
sever.listen(7878,function(){
    console.log("7878 listen to success");
})