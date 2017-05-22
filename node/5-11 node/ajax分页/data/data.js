/**
 * Created by Administrator on 2017/5/11.
 */
var fs = require("fs");
var str = "领导说看见过来撒领导撒地方的萨菲解决了我就咯阿胶咯啊就废了的烧录卡飞拉萨就废了的萨菲就爱了几分来的撒娇路径";
var arr = [];
for(var i = 1; i <= 98;i++){
    var obj = {};
    obj.id = i;
    obj.name =str[getRandom(0,str.length-1)]+""+str[getRandom(0,str.length-1)];
    obj.sex =getRandom(0,1);
    obj.score=getRandom(50,100);
    arr.push(obj);
}
function getRandom(min,max){
    return min + Math.round(Math.random()*(max-min));
}
fs.writeFileSync("./data.json",JSON.stringify(arr),"utf8");