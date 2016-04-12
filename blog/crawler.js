/**
 * Created by wang on 2016/4/11.
 */
var http=require('http');
var cheerio=require('cheerio');
var url='http://www.imooc.com/learn/348';
http.get(url,function(res){
    var html='';
    res.on('data',function(data){
        html+=data;
    });
    res.on('end',function(){
        filterChapters(html);
    });
}).on('error',function(){
    console.log('获取到课程数据出错');
});
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