/**
 * Created by Administrator on 2017/5/15.
 */
/*
什么是MongDB
    1.mongdb 是一个基于分布式文件储存的开源数据库
    2.mongdb 将数据存储为一个文档(json)数据结构是由键值对构成
    3.mongdb 文档类似于 json 对象，字段可以包含对象 数组。

mongdb 的安装
    安装对应电脑的版本
    默认安装

mongdb 启动
 默认路径 C:\Program Files\feiq\Recv Files\mongodb
    shift+鼠标右键 点击在此处打开命令行
启动 mongdb 服务
    在 c 盘以外 新建一个空的目录 例 E:\mongdb\data
    在命令行中 ：mongod --dbpath=E:\mongdb\data
    如何不能正常启动的话 ：
         mongod --storageEngine mmapv1 --dbpath=

    启动成功的标志：默认端口 27017
        waiting for connections on port 27017
    启动mongdb
        mongo
        启动成功
            有大于号出现时
            输入 dbs 有返回数据库
    mongodb 中的一些基本概念
        数据库 ：数据库是由集合组成。
        集合 ：是由文档组成，一个集合可以表示一个实体
        文档 ：文档就是一条记录，比如一个同学的信息就可以当做一个文档
    数据库的实际操作
       查看所有数据库 show dbs
       默认数据库 3.4版本  admin local 默认不使用它们
                3.2版本 local

       创建数据库 ：use + 数据库名称 例如 ：use student
       查看当前数据库 ：db
       数据库中创建集合 ： db.createCollection(person)
       查看当前集合 ：show collections
       集合中创建记录 ：db.集合名.insert({}) 例 ：db.H75.insert({name:"dz",age:1,height:180})
       查看所有记录 ：db.集合名.find()
       删除记录 ：db.集合名.remove({属性或Id})
       查看帮助 ：db.集合名.help()
       查找集合下的记录
            通过制定属性查找： db.H75.find({})
            只查找一条记录 ：db.H75.findOne({})
            查询大于某个值的记录 ：db.H75.find({age:{$gt:25}})
            查询大于等于某个值的记录 ：db.H75.find({age:{$gte:25}})
            查询小于某个值的记录 ：db.H75.find({age:{$lt:25}})
            查询小于等于某个值的记录 ：db.H75.find({age:{$lte:25}})
            大于某值小于某值：db.H75.find({age:{$gt:25,$lt:30}})
            查询某值是一个或另一个： db.H75.find({$or:[{age:20},{age:30}]})
            每一次查询展示 5 条数据 ：db.H75.find().limit(5);
            跳过前 5 条展示剩下的数据 ： db.H75.find().skip(5);
            跳过前 10 条展示剩下中的 5 条： db.H75.skip(10).limit(5);
      更新数据：
            db.H75.update({name:"xm"},{$set:{age:15}})
    */
