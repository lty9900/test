/**
 * Created by Administrator on 2017/5/9.
 */
var http = require("http");
var eve = http.createServer(function(req,res){
    console.log(req);
    console.log(res);
    console.log("监听到");
    res.end("88888")
})
eve.listen(9999);
