const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
});

readline.question(`what's your name?`, name => {
    console.log(`hello,${name}`);
    readline.close();
})

//使用 inquirer 更完整、更抽象
const inquirer = require('inquirer');
inquirer
    .prompt([
        {
            type: 'input',
            name: 'name',
            message:`what's your name?`,
        }
    ])
    .then(answer => {
        console.log(`Hello,${answer.name}`)
    })
    
    