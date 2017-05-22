/**
 * Created by Administrator on 2017/5/9.
 */
var http = require("http");
var url = require("url");
var fs = require("fs");
var sever = http.createServer(function(seq,ser){
    var str = seq.url;
    var urlObj = url.parse(str,true).query;
    console.log(JSON.stringify(urlObj));
    fs.writeFileSync('./news.json',JSON.stringify(urlObj),"utf8");
    var confile =  fs.readFileSync("./news.json","utf8");
    ser.end(confile);
})
sever.listen(7979);