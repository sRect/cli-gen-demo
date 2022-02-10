#!/usr/bin/env node

var argv = process.argv; // 命令行参数
var filePath = __dirname; // 当前文件的路径
var currentPath = process.cwd(); // 当前shell上下文路径

// /**
//  * 执行npm link 链接到全局后
//  * 在桌面上执行gen，打印出下面结果
//  * [
//     'D:\\soft\\nvm\\nodejs\\node.exe',
//     'D:\\soft\\nvm\\npm\\node_modules\\cli-gen-demo\\cli.js'
//   ]

//   D:\my\resource\cli-gen-demo
//   C:\Users\DELL
//  */

// console.log(argv);
// console.log(filePath);
// console.log(currentPath);

// var fs = require("fs");
// var nunjucks = require("nunjucks");

// var tpl = fs.readFileSync("./gen.tpl").toString();

// var compiledData = nunjucks.renderString(tpl, {
//   username: "James",
// });

// console.log(compiledData);

// fs.writeFileSync("./gen.foo", compiledData);

var fs = require("fs");
var argvArr = argv.slice(2);
var nunjucks = require("nunjucks");
var tpl = fs.readFileSync(filePath + "/gen.tpl").toString();

var data = {
  model: argvArr.shift(),
  attr: {},
};

argvArr.forEach((item) => {
  var arr = item.split(":");

  var k = arr[0];
  var v = arr[1];

  data.attr[k] = v;
});

console.log(data);

var compiledData = nunjucks.renderString(tpl, data);

console.log(compiledData);

fs.writeFileSync(currentPath + "/gen.foo", compiledData);
