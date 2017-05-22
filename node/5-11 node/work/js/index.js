/**
 * Created by Administrator on 2017/5/11.
 */

var pageModel = (function(){
    //获取用户列表
    var userList = document.getElementById("userListInfo");
    var pages = document.getElementById("page");
    var footer = document.querySelector("footer");

    //默认是第一页
    var curPage = 1;
    //默认页数
    var totol = 0;
    function click(pages){
        pages.onclick=function(e){
            var e = e || window.event;
            var taget = e.target || e.srcElement;
           console.log(taget.innerHTML) ;
            switch (taget.innerHTML){
                case "首页":
                    if(!(curPage == 1)){
                        curPage = 1;
                    }else{
                        return;
                    }
                    break;
                case "上一页":
                    if(curPage > 1){
                        curPage--;
                    }else{
                        return;
                    }
                    break;
                case "下一页":
                    if(curPage < totol){
                        curPage++;
                    }else{
                        return;
                    }
                    break;
                case "尾页":
                    if(!(curPage == totol)){
                        curPage = totol;
                    }else{
                        return;
                    }
                    break;
            }
            if(!isNaN(taget.innerHTML)){
                if(!( curPage == taget.innerHTML)){
                    curPage = taget.innerHTML;
                }else{
                    return;
                }

            }
            console.log(taget.localName)
            if(taget.localName == "input"){
                taget.onclick = null;
                return;
                }
            console.log(curPage);
            sendAjax();
        }
        /*pageGo.onkeyup = function(ev){
            var ev = ev || window.event;
            if(ev.keyCode == 13){
                var val = this.value;
                if(!isNaN(val)){

                if(val == curPage){
                    return;
                }else if(val<0){
                    val = 1;
                }else if(val > 10){
                    val = 10;
                }
                curPage = val;
                }else{
                    return
                }
                sendAjax();
            }
        }*/
    }
    //用户列表区域事件绑定
        userList.onclick = function(e){
            var e = e || window.event;
            var tar = e.target || e.srcElement;
            var tarName = tar.parentNode.tagName.toUpperCase();
            if(tarName == "LI"){
                var userId = tar.parentNode.getAttribute("userId");
                //window.location.href = "./detail.html";//覆盖当前页
                window.open("./detail.html?id="+userId)//重新打开页面
            }
        }
    function bindHTML(ary){
        //遍历所有用户
        var str= "";
           for(var i = 0; i < ary.length;i++){
               //保存用户对象
               var userInfo = ary[i];
               //绑定用户信息
               str += "<li userId='"+userInfo.id+"'><span>"+userInfo.name+"</span> <span>"+(userInfo.sex>0?"男":"女")+"</span> <span>"+userInfo.score+"</span></li>";
           }
        userList.innerHTML = str;
        var str="";//清空字符串
        for(var i = 1; i <= totol;i++){
            str += "<li>"+i+"</li>";
            //console.log(str);
        }

        pages.innerHTML = str;
         click(footer);

    }


    function  sendAjax(){
        ajax({
            type:"get",//请求方式
            url:"/getListUserInfo?page="+curPage,//路径
            dataType:"json",
            async:true,
            data:null,
            success:function(data){
                console.log(data);
                totol = parseInt(data.total);//获取总页数
                bindHTML(data.data)//绑定页面数据

            }
        })
    }

    function init(){
        //分装接口
        sendAjax();
    }
    return {
        //暴漏接口
        init:init
    }

})()
pageModel.init();