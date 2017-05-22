/**
 * Created by Administrator on 2017/5/15.
 */
/*
*   中间件中的req res
*   路由中的req res 是同一个吗
*       答： 是。
* */
var express = require("express");
var app = express();
//添加中间件
    app.use("/",function(req,res,next){
        req.name = "zs";
        res.age = 18;
        next();
    })
app.get("/",function(req,res){
    console.log(req);
    console.log(res);

})
app.listen(2222,function(){
    console.log("2222 listen in success");
});