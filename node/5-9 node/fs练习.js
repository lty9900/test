/**
 * Created by Administrator on 2017/5/9.
 */
function fn(){
    var fs = require("fs");
    var file =  fs.readFileSync("./data.json","utf8");
    var writ = fs.writeFileSync("./new.json",JSON.stringify(file),"utf8");

}
fn();