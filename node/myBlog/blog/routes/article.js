/**
 * Created by Administrator on 2017/5/18.
 */
//var express = require('express');//使用 express 模块
    var express = require("express");
//var router = express.Router();//使用 express 模块 定义路由容器
    var router = express.Router();

/* GET home page. */
/*router.get('/', function(req, res, next) {
    res.render('article', { title: 'Express' });
});*/
router.get("/add",function(req,res,next){
    res.render("article/add",{title:"发表文章标题",content:"发表文章页"})//模版文件渲染
})
module.exports = router;
