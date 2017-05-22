
var express = require("express")

var router = express.Router();
//权限管理
var auth = require("../minddleware/auth");
//导入文章模型
var articleModel = require("../mongodb/db").articleModel
//导入用户模型
var userModel = require("../mongodb/db").userModel;
//图片上传
var multer = require("multer");
//图片上传 配置参数
var strAge = multer.diskStorage({
    destination:function(req,file,cb){
        cb(null,"../public/uploads")//保存上传的图片
    },
    filename:function(req,file,cb){
        cb(null,file.originalname)//文件名使用默认文件名
    }
})
var upload = multer({storage:strAge})//配置上传
//文章发表页获取
router.get("/add",auth.checkLogin,function(req,res,next){
    res.render("article/add",{title:"发表文章标题",content:"发表文章页"})
})
//文章页发表页数据提交
router.post("/add",auth.checkLogin,upload.single("poster"),function(req,res,next){
    var artcileInfo = req.body;


    if(req.file){
        artcileInfo.poster = "/uploads/"+req.file.originalname;//判断文件的文件名
    }
    //console.log(artcileInfo);
    //获取当前时间 添加到 定义的模型中
    artcileInfo.createDate = Date.now();
    //将当前用户的 _id 传入到模型中
    artcileInfo.user = req.session.user._id;
    articleModel.create(artcileInfo,function(err,doc){
        if(!err){
            req.flash("success","发表文章成功");
            res.redirect("/")
        }else{
            req.flash("error","发表文章失败，请重新发表");
            res.redirect("back");
        }
    })
})

module.exports = router ;



