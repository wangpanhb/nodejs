/**
 * Created by wang on 2016/4/13.
 */
var fs=require('fs');
fs.readFile('./public/images/2.jpg',function(err,origin_buffer){
    console.log(Buffer.isBuffer(origin_buffer));
    fs.writeFile('logo_buffer.png',origin_buffer,function(err){
        if(err){
            console.log(err);
        }
    });
    var base64Image=origin_buffer.toString('base64');
    console.log(base64Image);
    var decodedImage=new Buffer(base64Image,'base64');
    console.log(Buffer.compare(origin_buffer,decodedImage));
    fs.writeFile('logo_decoded.png',decodedImage, function (err) {
        if(err){console.log(err)}
    })
});