/**
 * Created by Administrator on 2017/5/10.
 */

var http = require("http");
var fs = require("fs");
var url = require("url");

var rever = http.createServer(function(req,res){
    var urlObj = url.parse(req.url,true);
    var pathname = urlObj.pathname;
    var query = urlObj.query;

//声明正则表达式
    var reg = /\.(HTML|CSS|JS|TXT|JSON|ICO)/i;
    if(reg.test(pathname)){
        var suffix = reg.exec(pathname)[1].toUpperCase();//获取请求文件的后缀名 转换成大写
        console.log( reg.exec(pathname));
        var suffixMIME = "text/html";
        switch (suffix){
            case "HTML":{
                suffixMIME = "text/html"
                break;
            }

            case "CSS":{
                suffixMIME = "text/css"
                break;
            }

            case "JS":{
                suffixMIME = "application/javascript"
                break;
            }

            case "TXT":{
                suffixMIME = "text/plain"
                break;
            }

            case "JSON":{
                suffixMIME = "application/json"
                break;
            }

        }
        try{
            var conFile = fs.readFileSync("."+pathname,"utf8");
            res.writeHead(200,{"content-type":suffixMIME+";charset=utf-8"});
            res.end(conFile,function(){
                console.log("grend")
            })
        }catch(err){
            res.writeHead(404,{"content-type":"text/plain;charset=utf-8"});
            res.end("not fild")
        }
    }

})
rever.listen(6868,function(){
    console.log("6868 listen to success");
})