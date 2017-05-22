/**
 * Created by Administrator on 2017/5/9.
 */

var arr = [1,2,3,4,5];
var num = 0;
function fn(){
   for(var i = 0; i < arguments.length;i++){
       num += arguments[i];

   }
   return num;
}
console.log(fn(1,4,5,6,8,7));
