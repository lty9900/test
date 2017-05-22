/**
 * Created by Administrator on 2017/5/9.
 */
//导入fs模块
    /*
    *   readFileSync 同步读取问文件的方法
    *       参数一 ：读取文件的路径
    *       参数二 ：设置读取文件的编码 fs 默认的读取文件的类型 是 Buffer
    * */
var fs = require("fs");
/*var confile =  fs.readFileSync("./data.json","utf8");

 *  writeFileSync 同步写入文件的方法
*       参数一 ： 文件的路径
*       参数二 ：需要写入的数据
*       参数三 ：写入文件的编码
*       不仅可以添加参数 而且 还可以创建 json
* */
var data = {
    name:"zs",
    age:13
}
 fs.writeFileSync('./new.json',JSON.stringify(data),"utf8");
console.log(JSON.parse(confile));

