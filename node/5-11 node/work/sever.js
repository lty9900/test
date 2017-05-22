/**
 * Created by Administrator on 2017/5/11.
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
    //列表页
    function getAllUserInfo(){
        var allUserInfo = fs.readFileSync("./data/data.json","utf8");
        (!allUserInfo)&&(allUserInfo = "[]");
        //console.log(allUserInfo)
        return JSON.parse(allUserInfo);
    }
    function getUserInfoFormPage(allUserInfo,page){
        //console.log(allUserInfo);
        var steat = (page-1)*8;
        var end = page*8-1;
        //console.log(steat);

        end = (end>=allUserInfo.length)?(allUserInfo.length-1):end;
        var arr = [];
        //console.log(end);
        for(var i = steat;i <=end;i++){
            arr.push(allUserInfo[i]);
        }
        return arr;
    }
    if(pathname == "/getListUserInfo"){
        var page = parseInt(query.page);
        //console.log(page);
        var allUserInfo = getAllUserInfo();
        var ary = getUserInfoFormPage(allUserInfo,page);
        var total = Math.ceil(allUserInfo.length/8);
        var resulf = {};
        resulf.code = ary.length>0?0:1;
        resulf.msg = ary.length>0?"获取指定页用户信息成功":"获取指定页用户信息失败";
        resulf.total = total;
        resulf.data = ary;
        console.log( JSON.stringify(resulf));
        res.writeHead(200,{"content-type":"application/json;charset=utf-8"});
        res.end(JSON.stringify(resulf));
    }
    //详情页
    function getUserInfoId(allUserInfo,id){
        for(var i = 0; i < allUserInfo.length;i++){
            if(allUserInfo[i].id == id){
                return allUserInfo[i];
            }
        }
        return null;
    }
    if(pathname = "/getDetailUserInfo"){
        var id = query.id;
        var allUserInfo = getAllUserInfo();
        var userInfo = getUserInfoId(allUserInfo,id);
        var resulf = {};
        resulf.code = userInfo?0:1;
        resulf.msg = userInfo?"获取指定页用户信息成功":"获取指定页用户信息失败";
        resulf.data = userInfo;
        console.log( JSON.stringify(resulf));
        res.writeHead(200,{"content-type":"application/json;charset=utf-8"});
        res.end(JSON.stringify(resulf));
    }
})
rever.listen(2323,function(){
    console.log("2323 listen to success");
})
