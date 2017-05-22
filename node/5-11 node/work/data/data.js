/**
 * Created by Administrator on 2017/5/11.
 */
var fs = require("fs");
var str = "若非了第三个看过两个卢萨卡都是多少了法律的时刻路径领导说空间领导说就发了多少发了多少级啊放了爱阿拉克简单来说啦";
var arr = [];
for(var i = 1; i <= 88;i++){
    var obj = {};
    obj.id = i;
    obj.name =str[getRandom(0,str.length-1)]+""+str[getRandom(0,str.length-1)];
    obj.sex =getRandom(0,1);
    obj.score=getRandom(1000000000000,9999999999999);
    arr.push(obj);
}
function getRandom(min,max){
    return min + Math.round(Math.random()*(max-min));
}
fs.writeFileSync("./data.json",JSON.stringify(arr),"utf8");