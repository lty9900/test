/**
 * Created by Administrator on 2017/5/10.
 */

/*
*   http 请求报文
*       1.http 事务 ：
*           一个 http 事务包含了客户端的请求和客户端的响应
*
* Request URL:http://localhost:6868/index.html
 Request Method:GET
 Status Code:200 OK
 Remote Address:[::1]:6868
 Response Headers
 view source
 Connection:keep-alive
 content-type:text/html;charset=utf-8
 Date:Wed, 10 May 2017 06:39:57 GMT
 Transfer-Encoding:chunked
 Request Headers
 view source
 Accept:text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,*///*;q=0.8
//Accept-Encoding:gzip, deflate, sdch, br
//Accept-Language:zh-CN,zh;q=0.8
//Cache-Control:max-age=0
//Connection:keep-alive
//Host:localhost:6868
//Upgrade-Insecure-Requests:1
//User-Agent:Mozilla/5.0 (Windows NT 6.1; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/55.0.2883.87 Safari/537.36
/*
*   http 的请求方式
*       请求方式本质上没有区别，但为了形成规范各自做各自的事情，出现了下面请求方式
*       get:一般用来获取数据
*       post:一般用来提交数据
*       delete:一般用来删除数据
*       put:一般用来更新服务器的指定信息
*       head:一般用来获取响应头，不包含响应体
*
* */
/*
*   get 和 post 区别
*       1.大小
*           get:有大小限制
*               get 请求通过url拼接参数传递参数，不同浏览器对url有大小限制（谷歌 8kb ie 2kb）
*           post:理论上没有大小限制
*               post 通过请求体传参，理论上没有大小限制（一般建议不超过 2mb）;
*       2.安全
*           get传参通过url,不安全
*           post通过请求体传参，相对安全
*       3.缓存
*           get 请求会出现缓存，post 没有缓存问题
*           原因：get请求处理缓存问题 一般是通过给 url 后面添加随机数
 *
* */
/*
*   http 状态码
*       1xx : 1开头表示消息，这类开头的状态码，代表请求已经被接收，需哟啊继续处理
*       2xx : 2开头表示成功，这一类型的状态吗，代表请求已成功被服务器接收、理解、并接受
*       3xx : 3开头表示重定向，这类状态码代表需要客户端采取进一步的操作才能完成请求
*       4xx : 4开头表示请求(客户端)错误，这类的状态码代表了客户端看起来可能发生了错误，妨碍了服务器的处理
*       5xx : 5开头表示服务器错误，这类状态码代表了服务器在处理请求的过程中有错误或者异常状态发生，也有可能是服务器意识到以当前的软硬件资源无法完成对请求的处理
*      常见的状态码
*       200 ： 成功
*       301 ： 永久重定向
*       302 ： 临时重定向(服务器负载均衡)
*       304 ： 客户端请求服务器返回的是缓存信息
*       400 ： 客户端传递给服务器的参数出现错误
*       401 ： 无权访问
*       404 ： 访问地址不存在
*       500 ： 位置的服务器错误
*       503 ： 服务器超负荷
* */