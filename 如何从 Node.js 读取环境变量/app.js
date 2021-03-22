//Node.js 的 process 核心模块提供了 env 属性，该属性承载了在启动进程时设置的所有环境变量。
process.env.NODE_ENV = 'development';
console.log(process.env);
/*
{
  TMPDIR: '/var/folders/9w/3lq3v0bn05j247qmv8lprt1m0000gn/T/',
  __CFBundleIdentifier: 'com.apple.Terminal',
  XPC_FLAGS: '0x0',
  TERM: 'xterm-256color',
  SSH_AUTH_SOCK: '/private/tmp/com.apple.launchd.YcMIrqqbg9/Listeners',
  XPC_SERVICE_NAME: '0',
  TERM_PROGRAM: 'Apple_Terminal',
  TERM_PROGRAM_VERSION: '440',
  TERM_SESSION_ID: '8D0263BA-A165-42C1-B303-106CE612D4D7',
  SHELL: '/bin/zsh',
  HOME: '/Users/zhumingjie',
  LOGNAME: 'zhumingjie',
  USER: 'zhumingjie',
  PATH: '/usr/local/bin:/usr/bin:/bin:/usr/sbin:/sbin',
  SHLVL: '1',
  PWD: '/Users/zhumingjie/Desktop/node-learn/如何从 Node.js 读取环境变量',
  OLDPWD: '/Users/zhumingjie/Desktop/node-learn',
  LANG: 'zh_CN.UTF-8',
  _: '/usr/local/bin/node',
  __CF_USER_TEXT_ENCODING: '0x1F5:0x19:0x34',
  NODE_ENV: 'development'
}

*/

process.exitCode = 0;