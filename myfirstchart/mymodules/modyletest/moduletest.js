/**
 * Created by wang on 2016/3/30.
 */
var name;
exports.setName=function(thyName){
    name=thyName;
};
exports.sayHello=function(){
    console.log('Hello'+name);
};