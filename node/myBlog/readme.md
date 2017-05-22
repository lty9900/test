## 生成器 或 脚手架
    项目叙述 ： 项目主体用到了 express 框架，便捷性。
    express 生成器("-g" 全局安装框架)
        npm install -g experss-generator

    借助 express 生成器 生成一个项目
        express -e 项目名称

## 项目文件分析
    app.js 文件 ：express 配置信息
    package.json ：保存这项目工程的信息以及所依赖的模块 dependencies 中添加依赖模块 通过 npm install 运行后就会添加
    node_modlue : 存放 所依赖模块 的地方
    public : 存放静态资源的地方
    views : 存放视图文件或模版文件
    routes : 存放路由的文件
    bin : 一般存放可执行文件，项目的启动 1.目录下 直接右击 run www文件 2.通过命令行 ： node www


    {
      "name": "blog",//当前项目名称
      "version": "0.0.0",//版本名称
      "private": true,
      "scripts": {
        "start": "node ./bin/www"//描述启动文件
      },
      "dependencies": {//工程所依赖的模块的描述
        "body-parser": "~1.17.1",
        "cookie-parser": "~1.4.3",
        "debug": "~2.6.3",
        "ejs": "~2.5.6",
        "express": "~4.15.2",
        "morgan": "~1.8.1",
        "serve-favicon": "~2.4.2"
      }
    }

## 功能分析
    项目是搭建一个个人博客系统，具有登录注册 发表文章具有 增删改查 功能
## 设计目标
    未登录状态 ：主页导航栏显示 注册、登录、文章列表、发表日期
    登陆后 ：主页导航显示 发表文章、退出 等功能
    用户登录和退出 都会返回到首页

## session 和 cookie

## 什么是session
> session是另一种记录客户状态的机制，不同的是Cookie保存在客户端浏览器中，而session保存在服务器上

> 客户端浏览器访问服务器的时候，服务器把客户端信息以某种形式记录在服务器上，这就是session。客户端浏览器再次访问时只需要从该Session中查找该客户的状态就可以了

## cookie与session区别
- 1: cookie数据存放在客户的浏览器上，session数据放在服务器上。
- 2: cookie不是很安全，别人可以分析存放在本地的COOKIE并进行COOKIE欺骗 考虑到安全应当使用session
- 3: session会在一定时间内保存在服务器上。当访问增多，会比较占用你服务器的性能 考虑到减轻服务器性能方面,应当使用COOKIE
- 4: 单个cookie保存的数据不能超过4K，很多浏览器都限制一个站点最多保存20个cookie
> 将登陆信息等重要信息存放为session、其他信息如果需要保留，可以放在cookie中

## session实现
- 1: 在服务器端生成全局唯一标识符session_id
- 2: 在服务器内存里开辟此session_id对应的数据存储空间
- 3: 将session_id作为全局唯一标示符通过cookie发送给客户端
- 4: 以后客户端再次访问服务器时会把session_id通过请求头中的cookie发送给服务器
- 5: 服务器再通过session_id把此标识符在服务器端的数据取出

<!--处理图片的话一定要加 enctype="multipart/form-data"-->