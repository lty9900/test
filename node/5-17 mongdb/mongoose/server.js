/**
 * Created by Administrator on 2017/5/17.
 */

var http = require("http"),url = require("url"),fs = require("fs");
var personModel = require("./monngoose 读取数据.js").peronModel;
var server = http.createServer(function(req,res){
    var urlObj = url.parse(req.url,true);
    var pathname = urlObj.pathname;
    var query = urlObj.query;
    console.log(query);
    personModel.find({},function(err,doc){
        if(!err){
            //console.log(doc);
            var data = JSON.stringify(doc);
            res.end(data);
        }else{
            console.log(err);
        }
    })
})
server.listen(8888,function(){
    console.log(888)
})