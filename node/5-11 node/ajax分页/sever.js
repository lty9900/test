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
    /*静态资源文件的请求*/
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
    //获取所有用户信息
    function getAllUser(){
        var allUser = fs.readFileSync("./data/data.json","utf8");//读取所有用户信息
        (!allUser)&&(allUser = "[]");//判断是否有数据 没有数据赋值为数组
        return JSON.parse(allUser);
    }
    //获取指定页用户信息
    function getUserFormPage(allUser,page){
        var start = (page - 1)*10;//开始下标
        var end = page*10 - 1;//结束下标
        end = (end>=allUser.length)?(allUser.length-1):end;
        var ary = [];//保存用户信息
        for(var i = start; i <= end;i++){
            ary.push(allUser[i]);
        }
        //console.log(ary);
        return ary;
    }

    /*前后台定制的接口(API) 接口的请求处理*/
    //获取指定页用户信息
    if(pathname == "/getListUser" ){
        //1.获取页码数 url 中的 page
        var page = parseInt(query.page);
        //console.log(page)
        //2.获取所有用户信息
        var allUser = getAllUser();
        //console.log(allUser);
        //3.在所有用户信息中找到指定页码的用户信息
        /*
        * 1  0 - 9
        * 2  10 - 19
        * 3  20 - 29
        * */
        var ary = getUserFormPage(allUser,page);
        //4.确定总页数
        var totol = Math.ceil(allUser.length/10);
        //5.按照接口返回信息
        var resulf = {};
        resulf.code = ary.length>0?0:1;
        resulf.msg = ary.length>0?"获取指定页用户信息成功":"获取指定页用户信息失败";
        resulf.totol = totol;
        resulf.data = ary;
        console.log( JSON.stringify(resulf));
        res.writeHead(200,{"content-type":"application/json;charset=utf-8"});
        res.end(JSON.stringify(resulf));

    }
//    根据id获取用户信息
    function getUserId(allUser,id){
        //console.log(allUser);
        for(var i = 0; i < allUser.length;i++){//遍历所有用户
            //console.log(allUser[i]);
            //console.log(id);
            if(allUser[i].id == id){//匹配id

                return allUser[i];//返回数据
            }
                //return null;

        }
        return null;
    }
//    获取指定用户信息
    if(pathname = "/getDeailUser"){
        //获取url中的id
        var id = parseInt(query.id);
        //console.log(id);
        //获取所有用户信息
        var allUserInfo = getAllUser();
        //console.log(allUserInfo);
        //在所有用户信息中匹配id
        var userInfo = getUserId(allUserInfo,id);
        //console.log(userInfo);
        //返回找到的数据
        var resulf = {};
        resulf.code = userInfo?0:1;
        resulf.msg = userInfo?"获取指定用户信息成功":"获取指定用户信息失败";
        resulf.data = userInfo;
        res.writeHead(200,{"content-type":"application/json;charset=utf-8"});
        res.end(JSON.stringify(resulf),function(){
            console.log("请求成功");
        });
    }
})
rever.listen(5656,function(){
    console.log("5656 listen to success");
})