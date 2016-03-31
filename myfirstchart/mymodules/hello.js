/**
 * Created by wang on 2016/3/30.
 */
function Hello(){
    var name;
    this.setName=function(thyName){
        name=thyName;
    };
    this.sayHello=function(){
        console.log('Hello '+name);
    };
};
module.exports=Hello;