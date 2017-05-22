/**
 * Created by Administrator on 2017/5/10.
 */

(function(){

    function creteXHR(){
        var arr =[//创建了一个数组，数组中的成员是函数，每个函数返回的是创建ajax对象的方式
            function(){
                return new XMLHttpRequest();//谷歌创建ajax对象
            },
            function(){
                return new ActiveXObject("Microsoft.XMLHTTP")//ie创建ajax对象
            },
            function(){
                return new ActiveXObject("Msxml2.XMLHTTP")//ie创建ajax对象
            },
            function(){
                return new ActiveXObject("Msxml3.XMLHTTP")//ie创建ajax对象
            }
        ]
        var xhr = null;//声明变量保存 ajax 对象
        var flag = false;
        for(var i = 0;i < arr.length;i++){
            var cur = arr[i];//数组中每个成员是函数
           try{
               xhr = cur();//创建ajax对象(成功了/失败了)
               creteXHR = cur;//不要浏览器重复创建 ajax 对象，替换创建 ajax 对象的方法
               flag = true;
               break;//结束循环
           }catch(err){
                console.log(err);
           }
            //如果数组中的成员全部try 都没有成果
        }
        if(i == arr.length){
            //throw error(111);
        }
        return xhr;
    }
        //ajax 封装
        function ajax(options){
            var _default = {//默认options默写属性不传值的时候，赋予一定的默认值
                type:"get",
                url:null,
                async:true,
                dataType:"json",
                data:null,
                success:null
            }
            for(var attr in options){//遍历对象，用用户传递的真实值opations替换默认值_default
                if(options.hasOwnProperty(attr)){//取出对象上的属性
                    _default[attr] = options[attr];
                }
            }
            if(_default.type == "get"){
                _default.url +=(( _default.url.lastIndexOf("?") >= 0 ? "&_=" : "?_=")+ Math.random());
            }
            var xhr = creteXHR();
                xhr.open( _default.type, _default.url, _default.async);//发送准备
                xhr.onreadystatechange = function(){
                    if(xhr.readyState == 4 &&(/^2\d{2}$/.test(xhr.status) || xhr.status == 304 )){
                        var data = xhr.responseText;
                        if( _default.dataType == "json"){
                            data = JSON.parse(data);
                        }
                        _default.success &&  _default.success(data);
                    }
                 }
            xhr.send( _default.data);
        }
        window.ajax = ajax;
})();