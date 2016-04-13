/**
 * Created by wang on 2016/4/10.
 */
var query=require("./mysql1.js");

query("select * from student;",function(err,vals,fields){
    //do something
    if(err){
        console.log(err);
    }
    vals.forEach(function(data){
        console.log(data.id);
        console.log(data.name);
        console.log(data.age);
    });
    console.log(vals);
});
