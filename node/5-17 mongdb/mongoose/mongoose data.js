/**
 * Created by Administrator on 2017/5/17.
 */
var mongoose = require("mongoose");
var fs = require("fs");

mongoose.connect("mongodb://localhost:27017/data");
var mongooseSchema = mongoose.Schema({
    id:Number,
    name:String,
    sec:Number,
    score:Number
})
var peonseModel = mongoose.model("data",mongooseSchema);
var dt = fs.readFileSync("./data.json","utf8");

peonseModel.create(JSON.parse(dt),function(err,doc){
    if(!err){
        console.log(doc)
    }else{
        console.log(err);
    }
})
