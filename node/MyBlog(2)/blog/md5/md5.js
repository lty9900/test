/**
 * Created by Administrator on 2017/5/19.
 */
//创建自定义加密模块
module.exports = function(input){
    //引入加密模块
    var crypto = require("crypto");
    //设置加密方法 md5
    var md5 = crypto.createHash("md5");
    //给参数加密
    md5.update(input);
    //返回加密后的 值
    return md5.digest("hex");
}
