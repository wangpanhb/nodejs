/**
 * Created by wang on 2016/4/11.
 */
var http=require('http');
var Promise=require('bluebird');
var cheerio=require('cheerio');
var url='http://www.imooc.com/learn/348';

function getPageAsync(url){
    return new Promise(function(resolve,reject){
        console.log('正在爬取'+url);

        http.get(url,function(res){
            var html='';
            res.on('data',function(data){
                html+=data;
            });
            res.on('end',function(){
                resolve(html);
            });
        }).on('error',function(e){
            reject(e);
            console.log('获取到课程数据出错');
        });
    });
}

function filterChapters(html){
    var $=cheerio.load(html);
    var chapters=$('.learnchapter');
    var courseData=[];
    chapters.each(function(item){
        var chapter=$(this);
        var chapterTitle=chapter.find('strong').text();
        console.log(chapterTitle);
    });
}