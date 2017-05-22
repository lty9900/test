var express = require('express');    // 使用express 模块
var router = express.Router();      //  使用express 模块定义路由容器
//进入首页展示文章列表
/*
*   获取所有文章信息
* */
//导入文章模型
var articleModel = require("../mongodb/db").articleModel;
/* GET home page. */
router.get('/', function(req, res, next) {
  var queryObj = {};//保存查找的文章的信息

  //定义一个初始化页数
  var pageNumber = parseInt(req.query.pageNum) || 1;
  //定义每一页展示文章的数量
  var pageSize = parseInt(req.query.pageSize) || 4;
/*
* skip
* */
  articleModel.find(queryObj)
      .skip((pageNumber - 1)*pageSize)//查找的时候跳过 n-1 页
      .limit(pageSize)//将查到的信息按照 pageSize 大小去展示
      .populate("user")//将文章信息中的外键(用户的_id)转化成对应的users用户模型
      .exec(function(err,articles){
        if(!err){
          req.flash("success","文章列表获取成功");
          //res.render('index', { title: '首页标题', articles:articles});
          /*
          *   articleModel.count 能够获取总的文章数量
          * */
          articleModel.count(queryObj,function(err,count){
            if(!err){
              res.render('index', { title: '首页标题', articles:articles});
            }else{
              res.flash("error","获取条数失败");
              res.redirect("back");
            }
          })
        }else{
          req.flash("error","文章列表获取失败");
          res.redirect("back");
        }
      })
});

module.exports = router;
