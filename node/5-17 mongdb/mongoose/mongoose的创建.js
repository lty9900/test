/**
 * Created by Administrator on 2017/5/17.
 */
var mongoose = require("mongoose");
mongoose.connect("mongodb://localhost:27017/db517");
//定义数据库集合骨架
var peronSchema = new mongoose.Schema({
    name:String,
    age:Number,
    addr:String
})
var personModel = mongoose.model("tt",peronSchema);

var arr=[];
for(var i = 0; i < 10;i++){
    arr.push({
        name:"ll"+i,
        age:18+i,
        addr:"北京"
    })

}
personModel.create(arr,function(err,doc){
    if(!err){
        console.log(doc);
    }else{
        console.log(err);
    }
})
