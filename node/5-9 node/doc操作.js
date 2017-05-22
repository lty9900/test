/**
 * Created by Administrator on 2017/5/9.
 */

/*
* 基本doc 操作
* 快捷键 window键 + R 输入 cmd 回车
* 1.查看自己IP 输入 ipconfig  参数 ipconfig all
* 2.跳转到指定盘符 盘符名+冒号 例： d:
* 3.创建文件夹 md 文件名 例： md test 跳转到指定文件夹 cd + 文件名
* 4.查看当前文件目录： dir
* 5.创建文件： cd > 文件名.后缀名  例：cd >a.txt echo 输入的文本>文件名
* 6.删除文件：del + 文件名.后缀名 例：del a.txt
* 7.返回上级目录 cd../
* 8.删除文件夹 rd 文件夹名 例： rd test
* 9.清理命令行： cls
* 10.终止程序： ctrl + c
* 11.退出命令行： exit
* 12.查看网络状态：ping + ip地址
*
* 如何搭载一台自己的服务器
*   1.前后代码要有
*   2.购买一台服务器(买一个ip地址)
*   3.代码部署 通过 ftp 上传 将代码部署到服务器上
*   4.买域名
*   5.DNS 域名解析
*
*  客户端和服务端的交互模型
*   1.http://www.zs.com:8080/index.html?name=zs&age=18
*   http:超文本传输链接协议
*   https:更安全的超文本传输链接协议
*   www.zs.com ：域名 dns中解析成IP
*   8080：端口号 0~65535 定位项目
*   /index.html ： 文件路径 指定了需要的文件
*   name=zs&age=18 ：参数
*   ftp:文件传输协议
*
*   http 默认端口：80
*   https 默认端口：443
*   ftp 默认端口：21
*
*   url : 统一资源定位符
*   urn : 统一资源名称
*   uri : 统一资源标识符
*   uri = url + urn
*
*   浏览器渲染引擎
*       谷歌的渲染引擎 v8(webkit)
*       火狐的渲染引擎 Gecko
*       ie  Trident
*
 *   客户端：
 *     1. 输入 url 路径
 *     2.解析服务器返回的数据，并进行渲染
 *   DNS:
 *     1.解析域名得到 ip 地址
 *     2.通过 ip 找到服务器
 *     3.通过端口找到指定的项目
 *     4.通过路径找到指定的文件
 *   服务器：
 *     1.把文件数据读取出来返回给客户端
 *
 *     什么是node.js
 *     1.node.js 是对谷歌 V8 引擎的一种封装，实现了 js 程序的独立运行，node.js是 js 的运行环境
 *     2.node.js 是一个事件驱动、非阻塞式I/O的模型，使其轻量又高效
 *     3.node.js 的包管理 npm,是全球最大的开源库生态系统
 *
 *     node 和 浏览器 有什么区别
 *      相同点 ： 都提供了 js 的运行环境
 *      不同点 ： 浏览器 装在客户端  node 一般装在服务器上
 *              浏览器内核 的不同要考虑兼容性 渲染不同  而 node 不需要考虑兼容问题
 *              浏览器不支持操作电脑文件 而 node 可以借助 fs 模块操作文件
 *      node 中运行 js 代码
 *          1.右击直接点击运行
 *          2.在doc 窗口中使用命令 node 文件名.后缀 例  node test.js
 *      node 当中的模块
 *          1.node 中提供了模块概念 来提高node.js的复用性
 *          2.模块是node中基本的组成，一个 js 文件可以相当于一个模块
 *     模块的导出
 *      1.模块必须导出才能使用。
 *      2.模块导出 用到 module.exports 和 exports
 *     模块的引入
 *      1.使用模块必须引入模块
 *      2.模块的引入使用 require（模块路径）
 *
 *      node 当中模块的分类
 *          内置模块 ： node 自身所带有的模块(http,url,fs)
 *          第三方模块 ： 别人写好封装好的模块(express 模块)
 *          自定义模块 ：自己编写的模块
 *
 *          内置模块引入 require(内置模块名) var fs = require("fs");
 *
 *          第三方模块 ： npm install 第三方模块名(安装第三方模块) require("模块名") var express = require("exquire");
 *          自定义模块 ： require("自定义模块的路径") var add = require("./add")
 *
 *          node 当中的内置模块
 *              http 模块 ：创建服务，监听端口，根据请求的 url 路径，执行相应的操作
  *             url 模块 ： 用来解析路径 一个方法 url.parse() 两个属性 pathname : 路径 query : 参数
  *             fs 模块 ： 是对文件的操作，读取和写入 readFileSync 同步读取  writeFileSync 同步写入
* */