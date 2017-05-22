/**
 * Created by Administrator on 2017/5/15.
 */

/*
 *
 *   中间件的作用：
 *      1.由于中间件中的req,res和路由中的req，res是用一个对象，所以将路由中的公共操纵提取出来，放在中间件中一次性设置，中间件首先会执行
 *      中间件匹配所有路由时 第一个参数不写。
 * */
var express = require("express");
var app = express();
//添加中间件
app.use(function(req,res,next){
    req.name = "zs";
    res.age = 18;
    next();
})
app.get("/user",function(req,res){
    console.log(req.name);
    console.log(res.age);
    res.send("/ 路径")
})
/*
*   all 匹配所有请求方式 get post delete put head
*       参数一：”*“  匹配所有路径
* */
//一般写在底部，当上面的所有请求方式和请求路径都不匹配的情况下，执行这个路由
app.all("*",function(req,res){
    res.send("你访问的路径不存在")
})
app.listen(2223,function(){
    console.log("2223 listen in success");
});