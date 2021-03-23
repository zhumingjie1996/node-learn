/**
 * node.js 提供了 console 模块，它基本上与浏览器中的 console 对象相同
 * 最常用的就是 console.log() ；
 * 如果传入对象，则它会呈现为字符串
 */

const x = 'x';
const y = 'y';
console.log(x, y);


/**
 * 也可以通过传入变量和格式说明符来格式化用语；
 * %s 会格式化为字符串
 * %d 会格式化为数字
 * %i 会格式化为其整数部分
 * %o 会格式化为对象
 */

console.log('以下是通过传入变量和格式说明符来格式化用语');
console.log('我的%s已经%d岁了', '猫', 2);

/**
 * 当然，这是执行此操作的底层方法。 为控制台输出着色的最简单方法是使用库。 
 * Chalk 是一个这样的库，除了为其着色外，它还有助于其他样式的设置（例如使文本变为粗体、斜体或带下划线）。
 * 可以使用 npm install chalk 进行安装，然后就可以使用它：
 */
console.log('改变 console.log 打印出来的文本字体')
const chalk = require('chalk');
console.log(chalk.yellow('Hello') + chalk.blueBright(',this is') + chalk.greenBright(' zhumingjie'));

/**
 * 创建进度条
 * Progress 是一个很棒的软件包，可在控制台中创建进度条。 使用 npm install progress 进行安装。
 */
console.log('创建一个进度条')
const ProgressBar = require('progress');
const bar = new ProgressBar(':bar', { total: 10 })
const timer = setInterval(() => {
  bar.tick()
  if (bar.complete) {
    clearInterval(timer)
  }
}, 100)