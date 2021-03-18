var obj = {
    name:'zhangsan',
    getName:function(){
        console.log(`my name is` + this.name);
    }
};

module.exports = obj; //{ name: 'zhangsan', getName: [Function: getName] }

// 或者

// exports.obj = obj; //{ obj: { name: 'zhangsan', getName: [Function: getName] } }

//只有在导出的对象是一个完整的对象的时候才能在 getname 中拿到 this.name ，否则在导出后打印的结果就是 undefined;