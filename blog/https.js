/**
 * Created by wang on 2016/4/13.
 */
var https=require('https');
var fs=require('fs');

var options={
    key:fs.readFileSync('ssh_key.pem'),
    cert:fs.readFileSync('ssh_cert.pem')
};
https.createServer(options,function(req,res){
    res.writeHead(200);
    res.end('hello imooc');
}).listen(8000);