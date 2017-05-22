/**
 * Created by Administrator on 2017/5/17.
 */
var mongoose = require("mongoose");
mongoose.connect("mongodb://localhost:27017/data")
var personSchema = new mongoose.Schema({
    name:"",
    age:Number,
    addr:""
})
var personModel = mongoose.model("datas",personSchema);
/*personModel.remove({},function(err,doc){
    if(!err){
        console.log(doc + "删除")
    }else{
        console.log(err)
    }
})*/

personModel.findOneAndRemove({id:1},function(err,doc){
    if(!err){
        console.log(doc);
    }else{
        console.log(err);
    }
})