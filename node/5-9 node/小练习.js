/**
 * Created by Administrator on 2017/5/9.
 */

//导出构造函数
module.exports = function(age,name){
    this.age = age;
    this.name = name;
    this.about = function(){
        console.log(this.age+"  "+this.name);
    }
}
