var express = require('express');
var app = express();
var fs = require('fs');
var path = require('path');
var bodyParser = require('body-parser')


app.get('/', function (req, res){
  console.log('Loading home page')
  res.sendFile(path.join(__dirname + '/lessonPage.html'));
});

app.post('/add_lesson', function(req,res){
  console.log('Adding as lesson');
  var leson_name = req.body.lesson_name;
  var date = req.body.date;
  //call sql add function
  res.send('Lesson Added');
  //res.sendFile(path.join(__dirname + '/lessonPage.html'));

});

var server = app.listen(8888,function () {
  var host = server.address().address;
  var port = server.address().port;
  console.log('Example app listening at http://%s:%s', host, port);
});
