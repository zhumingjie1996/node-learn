//node 自带有http模块，只需引用就可以
//为了保证此http模块不会被修改，所以用const定义
const http = require('http');

//req:(request)获取客户端传过来的信息
//res:(response)给浏览器相应信息

http.createServer((req,res) => {
    console.log(req.url);

    //设置响应头；
    //状态码是200，文件类型是 html，字符集是 utf-8;
    res.writeHead(200,{"content-type":"text/html;chartset:'utf-8'"});

    res.write("this is node.js");

    res.end();
}).listen(8888);

console.log('this project is running')