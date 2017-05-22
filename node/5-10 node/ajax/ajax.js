/**
 * Created by Administrator on 2017/5/10.
 */

function createXHR(){
    var xhr = null;
    try{
        xhr = new ActiveXObject("Microsoft.XMLHTTP");
    }catch(err){
        try{
            xhr = new ActiveXObject("Msxml2.XMLHTTP");
        }catch(err){
            try{
                xhr = new ActiveXObject("Msxml3.XMLHTTP");
            }catch(err){
                try{
                    xhr = new XMLHttpRequest();
                }catch(err){
                    throw error("你是个好人")
                }
            }
        }
        return xhr;
    }
}
createXHR();

    //true 异步
    // false 异步
    xhr.open("GET",url,true);
    xhr.onreadystatechange = function(){
        if(xhr.readyState == 4 &&(/^2\d{2}$/.test(xhr.status) || xhr.status == 304 )){
                console.log(xhr.responseText);
        }
    }
//send 卸载最后
    xhr.send(null);