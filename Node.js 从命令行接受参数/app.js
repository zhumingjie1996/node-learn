/*
当使用 node app.js 命令调用 Node.js 应用程序时候，可以传入任意数量的参数；
参数是可以独立的，也可以是健值对；
例如： 

node app.js joe

或者

node app.js name=joe

*/

 /**
获取参数值的方法是使用 Node.js 中内置的 process 对象。

它公开了 argv 属性，该属性是一个包含所有命令行调用参数的数组。

第一个参数是 node 命令的完整路径。

第二个参数是正被执行的文件的完整路径。

所有其他的参数从第三个位置开始。

可以使用循环迭代所有的参数（包括 node 路径和文件路径）：

 */

process.argv.forEach((val, index) => {
    console.log(`${index} : ${val}`);
});

/**
zhumingjie@zhumingjiedeMacBook-Pro Node.js 从命令行接受参数 % node app.js name=zhumingjie
0 : /usr/local/bin/node
1 : /Users/zhumingjie/Desktop/node-learn/Node.js 从命令行接受参数/app.js
2 : name=zhumingjie
 */

//排除前两个参数
console.log('排除前两个参数得到如下：');
const args = process.argv.slice(2);
console.log(args);

//如果没有键名