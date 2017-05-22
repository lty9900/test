/**
 * Created by Administrator on 2017/5/17.
 */
    //引入 mongoose 模块
var mongoose = require("mongoose");
    //链接数据库
    /*
    *   第一个参数： 协议 mongodb
    *   mongoose.connect("mongodb://localhost:数据库的端口/数据库名称")
    * */
mongoose.connect("mongodb://localhost:27017/db517")
/*
*   schema(骨架)
*       1.schema 是数据库结合模型的骨架
*       2.骨架定义了集合中的名称和字段类型以及默认信息
*
* */
/*
*   定义骨架
*
* */
/*var personSchaema = new mongoose.Schema({
    name:String,//姓名 字符串类型
    age:Number,//年龄 数字
    addr:String//家庭住址
})*/
var personSchema = new mongoose.Schema({
    name:String,
    age:Number,
    height:Number
})
/*
*   创建集合
*       参数一：对应的集合名称
*       参数二：集合对应的骨架
* */
//var personModel = mongoose.model("H75",personSchaema);
var personMol = mongoose.model("h55",personSchema);
/*var personEy = new personModel({
 name:"tyl",
 age:18,
 addr:"二钵子新村"
 })*/
var personEys = new personMol({
    name:"tt",
    age:20,
    height:180
})
//通过 save() 方法进行保护
/*
personEy.save(function(err,success){
    if(!err){
        console.log("添加数据成功")
    }else{
        console.log(err);
    }
})*/
personEys.save(function(err,success){
    if(!err){
        console.log("添加成功")
    }else{
        console.log(err)
    }
})
