var http = require('http');
var fs = require('fs');

http.createServer(function(req, res) {
  if (req.url == '/') {
    fs.readFile('./public/javascript/titles.json', function(err, data) {
      if (err) {
        console.error(err);
        res.end('Server Error');
      }
      else {
        var titles = JSON.parse(data.toString());

        fs.readFile('./public/template.html', function(err, data) {
          if (err) {
            console.error(err);
            res.end('Server Error');
          }
          else {
            var tmpl = data.toString();

            var html = tmpl.replace('%', titles.join('</li><li>'));
            res.writeHead(200, {'Content-Type': 'text/html'});
            res.end(html);
          }
        });
      }
    });
  }
}).listen(8000);
