/**
 * Created by Administrator on 2017/5/14.
 */
var arr = [
    {q:"a",p:false,s:["爱奇艺","安卓模拟器","airbnb","阿里巴巴批发网","阿里云","acfun","安居客","爱情公寓","爱奇艺网","暗黑3"]},
    {q:"c",p:false,s:["春秋航空","cfpl","csgo","成都","磁力链接","刺客信条","长城","菜鸟教程","chrome","cf"]},
    {q:"d",p:false,s:["大麦网","电影天堂","dnf","地图","dota2","dhl","豆瓣","大众点评","当当网","单机游戏"]},
    {q:"e",p:false,s:["excel教程","excel","eclipse","ems","二维码生成器","饿了么","恶魔少爷别吻我","ems快递单号查询","二维码","恶魔少爷别吻我第二季"]},
    {q:"g",p:false,s:["谷歌翻译","google翻译","github","google","gta5","工商银行","歌手","赶集网","高德地图","谷歌浏览器"]},
    {q:"h",p:false,s:["海贼王","h1z1","hotmail","火影忍者","花瓣","花瓣网","华为","欢乐喜剧人第三季","欢乐喜剧人","火车票"]},
    {q:"k",p:false,s:["酷狗音乐","kb4012598","kfc","快递查询","快乐大本营","酷狗","kb4012212","快手","柯南","酷我音乐盒"]}
]
var fs = require("fs");
fs.writeFileSync("./datas.json",JSON.stringify(arr),"utf8");
