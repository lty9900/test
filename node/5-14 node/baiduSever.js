/**
 * Created by Administrator on 2017/5/14.
 */
var http = require("http");
var url = require("url");
var fs = require("fs");
var server = http.createServer(function(req,res){
    var urlObj = url.parse(req.url,true);
    var pathname = urlObj.pathname;
    var query = urlObj.query;
    var reg = /\.(HTML|CSS|JS|TXT|JSON|ICO)/i;
    if(reg.test(pathname)) {
        var suffix = reg.exec(pathname)[1].toUpperCase();//获取请求文件的后缀名 转换成大写
        console.log(reg.exec(pathname));
        var suffixMIME = "text/html";
        switch (suffix) {
            case "HTML":
            {
                suffixMIME = "text/html"
                break;
            }
            case "CSS":
            {
                suffixMIME = "text/css"
                break;
            }
            case "JS":
            {
                suffixMIME = "application/javascript"
                break;
            }
            case "TXT":
            {
                suffixMIME = "text/plain"
                break;
            }
            case "JSON":
            {
                suffixMIME = "application/json"
                break;
            }
        }
    }
    if(pathname == "/getInfo"){
        var fn = query.callback;//获取自定义函数
        var data = fs.readFileSync("./datas.json","utf8");
        res.writeHead(200,{"content-type":suffixMIME+";charset=utf-8"});
        res.end(fn+"("+data+")");//获取数据
    }
    try{


    }catch(err){

    }
})
server.listen(5656,function(){
    console.log("5656 listen in success");
})
