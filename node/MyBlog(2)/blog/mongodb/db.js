/**
 * Created by Administrator on 2017/5/18.
 */
var mongoose = require("mongoose");
//导入数据库连接地址
//var dbUrl = require('../').dbUrl;
mongoose.connect("mongodb://localhost:27017/db75");
var userSchema = new mongoose.Schema({
    username:String,
    password:String,
    email:String
})
var userModel = mongoose.model("users",userSchema);

//创建文章骨架
var artivleSchema = new mongoose.Schema({
    title:String,
    content:String,
    poster:String,
    createDate:{
        type:Date,
        default:Date.now()
    },
    user:{
        type:mongoose.Schema.Types.ObjectId,//引用用户的 _id 找到唯一的用户
        ref:"users"//用户集合
    }
})
//文章骨架
    var articleModel = mongoose.model("article",artivleSchema);
//导出用户模型
module.exports.userModel = userModel;
//导出文章模型
module.exports.articleModel = articleModel;
