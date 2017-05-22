/**
 * Created by Administrator on 2017/5/17.
 */
//引入 mongoose 模块
var mongoose = require("mongoose");
//链接数据库
mongoose.connect("mongodb://localhost:27017/db517");
//定义骨架
var peronSchema = new mongoose.Schema({
    name:String,
    age:Number,
    addr:String
})
var peronModel = mongoose.model("tts",peronSchema);
//读取所有数据
/*peronModel.find({},function(err,doc){
    if(!err){
        console.log("数据提取成功");
    }else{
        console.log(err);
    }
})*/
   // personModel.findById() 通过 id 来读取数据
/*peronModel.findById("591bc7609d4674126c501658",function(err,doc){
    if(!err){
        console.log(doc)
    }else{
        console.log(err);
    }
})*/
peronModel.find({},function(err,doc){
    if(!err){
        console.log(doc+"删除")
    }else{
        console.log(err)
    }

})
   //module.exports.peronModel = peronModel;