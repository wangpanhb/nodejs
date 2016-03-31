/**
 * Created by wang on 2016/3/30.
 */

//http服务器：
 var http=require('http');
 http.createServer(function(req,res){
 res.writeHead(200,{'Content-type':'text/html'});
 res.write('<h1>Node.js</h1>;<input type="button" value="按键" /> ');
 res.end('<p>Hello World</p>');
 }).listen(3000);
 console.log("Http server is listen 3000");
/*var EventEmitter=require('events').EventEmitter;
var event=new EventEmitter();*/
/*
event.on('some_event',function(){
    console.log('some_event occured');
});
setTimeout(function(){
    event.emit('some_event');
},3000);*/


/*
//模块的导入
var myModule=require('./mymodules/moduletest');
myModule.setName('byvoid');
myModule.sayHello();
*/

//单次加载
/*var hello1=require('./mymodules/moduletest');
hello1.setName('my1');
var hello2=require('./mymodules/moduletest');
hello2.setName('my2');
hello1.sayHello();*/
//运行后发现输出结果是 Hello BYVoid 2，这是因为变量 hello1 和 hello2 指向的是同一个实例，
// 因此 hello1.setName 的结果被 hello2.setName 覆盖，最终输出结果是由后者决定的。


/*var Hello=require('./mymodules/hello');
var hello=new Hello;
hello.setName('wangpan');
hello.sayHello();*/
//module.exports = Hello 代替了 exports.Hello=Hello
