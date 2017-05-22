/**
 * Created by Administrator on 2017/5/11.
 */
var detailModel = (function(){
    var url = window.location.href;
    console.log(url);
    function queryString(url){
        var reg = /([^?#&=]+)=([^?#&=]+)/g;
        var obj = {};
        url.replace(reg,function(){
            //console.log(arguments);
            obj[arguments[1]] = arguments[2];
        })
        //console.log(obj)
        return obj;
    }
    var userList = document.getElementById("userList");
    function  detailHTML(data){
        console.log(data);
        var str = "";
        str += "<h1> <p>"+data.id+"</p><p>"+data.name+"</p><p>"+(data.sex>0?"男":"女")+"</p><p>"+data.score+"</p></h1>";
        userList.innerHTML = str;
    }

    function detalAjax(){
        ajax({
            type:"get",//请求方式
            url:"/getDetailUserInfo?id=" + (queryString(url).id),//路径
            dataType:"json",
            async:true,
            data:null,
            success:function(data){
                //console.log(data);
                detailHTML(data.data)//绑定页面数据
            }
        })
    }

    function init(){
        detalAjax();
    }
    return {
        init:init
    }
})()
detailModel.init();
