/**
 * Created by Administrator on 2017/5/19.
 */

var crypto = require("crypto");//引进加密模块
//console.log(crypto.getHashes());查看算法
var md5 = crypto.createHash("md5");//创建 md5 算法
//使用 md5.update 进行数据加密 参数是字符串
md5.update("123456");
//将加密的信息进行返回
var result = md5.digest("hex");
console.log(result);
//e10adc3949ba59abbe56e057f20f883e





/*
* [ 'DSA',
 'DSA-SHA',
 'DSA-SHA1',
 'DSA-SHA1-old',
 'RSA-MD4',
 'RSA-MD5',
 'RSA-MDC2',
 'RSA-RIPEMD160',
 'RSA-SHA',
 'RSA-SHA1',
 'RSA-SHA1-2',
 'RSA-SHA224',
 'RSA-SHA256',
 'RSA-SHA384',
 'RSA-SHA512',
 'dsaEncryption',
 'dsaWithSHA',
 'dsaWithSHA1',
 'dss1',
 'ecdsa-with-SHA1',
 'md4',
 'md4WithRSAEncryption',
 'md5',
 'md5WithRSAEncryption',
 'mdc2',
 'mdc2WithRSA',
 'ripemd',
 'ripemd160',
 'ripemd160WithRSA',
 'rmd160',
 'sha',
 'sha1',
 'sha1WithRSAEncryption',
 'sha224',
 'sha224WithRSAEncryption',
 'sha256',
 'sha256WithRSAEncryption',
 'sha384',
 'sha384WithRSAEncryption',
 'sha512',
 'sha512WithRSAEncryption',
 'shaWithRSAEncryption',
 'ssl2-md5',
 'ssl3-md5',
 'ssl3-sha1',
 'whirlpool' ]
* */
