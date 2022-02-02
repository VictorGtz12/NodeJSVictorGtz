var http = require('http'),fs=require('fs');

http.createServer(function (req, res) {
  var stream=fs.createReadStream("nombre.txt");

  var leeme = fs.readFileSync('nombre.txt', 'utf8')
  fs.writeFileSync('receptor.txt', leeme);

  stream.on('error',function(err)
  {
        res.statusCode=500;
        res.end(String(err));
  });

  stream.pipe(res);
}).listen(8080);