/**
 * Created by Administrator on 2017/5/9.
 */
    /*
    *   url.parse() 解析 url
    *   参数一 ： url路径
    *   参数二 ：true 时 参数query 是一个对象 反之为 字符串
    * */
var urlStr = "http://www.zhans.com:8888/index.html?username=zhangs&age=33";
var url = require("url");//引入 url 模块
var urlObj = url.parse(urlStr,true);
console.log(urlObj);
/*
* Url {
 protocol: 'http:',  协议
 slashes: true,
 auth: null,
 host: 'www.zhans.com:8888', 域名 + 端口
 port: '8888',   端口
 hostname: 'www.zhans.com', 域名
 hash: null,
 search: '?username=zhangs&age=33',
 query: 'username=zhangs&age=33', 参数
 query: { username: 'zhangs', age: '33' }, //url.parse() 第二个参数为true
 pathname: '/index.html', 路径
 path: '/index.html?username=zhangs&age=33', 路径 + 参数
 href: 'http://www.zhans.com:8888/index.html?username=zhangs&age=33' 完整的链接
  }
* */