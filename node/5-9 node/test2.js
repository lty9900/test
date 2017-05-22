/**
 * Created by Administrator on 2017/5/9.
 */
function fn(){
    var num = 0;
    for(var i = 0; i < arguments.length;i++){
        num += arguments[i];
    }
    return num;
}



function fn2(){
    var num  = 0;
    for(var i = 0; i < arguments.length;i++){
        num -= arguments[i];
    }
    return num
}


module.exports = {
    add:fn,
    add2:fn2
}

