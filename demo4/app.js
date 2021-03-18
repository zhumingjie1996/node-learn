//common.js 规范的模块化
const obj = require("./modules/commonjs01");

//在这里不能使用 import
// import obj from './modules/commonjs01';
console.log(obj);
// obj.getName(); //module.exports = obj; 
// obj.obj.getName() //exports.obj = obj; 命名的对象