##  生成器 / 脚手架
>   项目叙述 ： 项目主体用到express 框架，便捷性。

>   express 生成器

    npm install -g  express-generator

>  借助express 生成器 生成一个项目

    express -e  项目名称


##  项目文件分析

>  app.js 文件 ： express 的配置信息
>  package.json: 保存项目工程信息以及所依赖的模块 dependencies 中添加依赖  通过 npm install 运行后就会添加
>  node_modlue : 存放所依赖的模块的地方

>  public :  存在静态资源的地方

>  views :   存放视图文件 或者模板文件

>  routes :  存放路由文件的

>  bin :  一般存放可执行文件,项目的启动   1.直接右击run www    2 通过命令行 ：node www


##  package.json

    {
      "name": "blog",     //  当前项目名称
      "version": "0.0.0",   //  版本号
      "private": true,
      "scripts": {
        "start": "node ./bin/www"  //   描述启动文件
      },
      "dependencies": {         //   工程所以依赖模块的描述
        "body-parser": "~1.16.0",
        "cookie-parser": "~1.4.3",
        "debug": "~2.6.0",
        "ejs": "~2.5.5",
        "express": "~4.14.1",
        "morgan": "~1.7.0",
        "serve-favicon": "~2.3.2"
      }
    }


##  功能分析

>  项目是搭建一个个人博客系统，具有登录 注册 发表文章具有增删 该查的功能

##  设计目标

>   未登录 ：主页导航栏显示 注册登录    文章列表  发表日期
>   登录后 : 主页导航显示 发表文章  退出  等功能
>   用户的登录 退出 都会跳转到首页















