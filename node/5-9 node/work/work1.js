/**
 * Created by Administrator on 2017/5/10.
 */
var http = require("http");
var fs = require("fs");
var url = require("url");
var reve = http.createServer(function(req,res){
    //获取url 并解析url
    var urlObj = url.parse(req.url,true);
    //提取参数
    var query = urlObj.query;
    //参数写入 jso n文件
    fs.writeFileSync("./new2.json",JSON.stringify(query),"utf8");
    //提取 jso n文件内容
    var conFile = fs.readFileSync("./new2.json","utf8");
    //写入页面
    res.end(conFile);
})
reve.listen(9999,function(){
    console.log("9999 listen to success");
})
