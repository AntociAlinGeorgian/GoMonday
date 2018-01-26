var express = require('express');
var app = express();
var port = process.env.PORT || 3000;

app.use(express.static(__dirname + '/public'));

app.get('/', function(res, req){
  res.sendFile('index.html');
});

app.listen(port, function(){
  console.log('server started on ' + port);
});
