/**
 * Created by Administrator on 2017/5/9.
 */
var fs = require("fs");
var http = require("http");

var eve = http.createServer(function(req,res){
    console.log(req);
    console.log(res);
    var read = fs.readFileSync("./data.json","utf8");

    res.end(read);
})
eve.listen(8989);
