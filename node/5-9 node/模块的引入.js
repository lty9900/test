/**
 * Created by Administrator on 2017/5/9.
 */
var add = require("./test2.js").add;
console.log(add(1,2,3,4,5));
var add2 = require("./test2.js").add2;
console.log(add2(1,2,3,4,5,6));
var txt = require("./test2.js");
console.log(txt.add(12,23,4));
console.log(txt.add2(12,23,42))