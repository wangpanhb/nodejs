var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

/*router.all('/',function(req,res,next){
    console.log('all methods cap');
    next();//转移控制权给后面的
});*/

/*router.get('/',function(req,res,next){
    res.send('The time is ' + new Date().toString());
});*/


module.exports = router;
