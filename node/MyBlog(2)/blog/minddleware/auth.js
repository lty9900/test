/**
 * Created by Administrator on 2017/5/19.
 */

//这个模块是处理 权限 操作的
//登录以后能操作的事情
module.exports.checkLogin = function(req,res,next){
    if(req.session.user){//根据 seccion 中有用户信息
        next();//按照默认的继续默认的执行
    }else{
        req.flash("error","当前页面需要登录后，才能操作，请先登录");
        res.redirect("/users/login");//没有找到 seccion 中用户信息 页面发生重定向到 登陆页
    }
}

//没有登录时能操作的事情
module.exports.checkNotLogin = function(req,res,next){
    if(req.session.user){
        res.redirect("/");
    }else{
        next();
    }
}

