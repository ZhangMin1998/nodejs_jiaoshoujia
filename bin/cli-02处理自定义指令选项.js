#! /usr/bin/env node

const { program } = require('commander')

program.option('-f --frawork <frawork>', '设置框架')
program
.command('create <project> [args...]') //command是创建一个命令比如：mycli create xxxx a b c d
.alias('crt') // //给你的create命令取别名为crt 使用时可以 mycli crt xxxx
.description('create a project')//对这个命令进行描述

.action((project,args)=>{//运行这个你定义的命令是要做什么事情,在回调函数中处理你要做的逻辑
  //do something
  console.log(project);
  console.log(args);
})

program.parse(process.argv)