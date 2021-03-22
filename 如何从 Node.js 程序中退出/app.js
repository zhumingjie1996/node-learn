const express = require('express');
const app = express();

app.get('/', (req,res)=>{
    res.send('hello');
})

const server = app.listen(3000, () => console.log('服务器已就绪'))

//SIGKILL 是告诉进程要立即终止的信号，理想情况下，其行为类似于 process.exit()。
//SIGTERM 是告诉进程要正常终止的信号。它是从进程管理者（如 upstart 或 supervisord）等发出的信号。
process.on('SIGTERM', () => {
    server.close(() => {
        console.log('进程终止')
    })
});

//程序运行10s后，终止程序，打印‘进程终止’
setTimeout(() => {
    process.kill(process.pid, 'SIGTERM')
},10000)