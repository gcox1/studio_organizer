var express = require('express');
var app = express();
var fs = require('fs');
var path = require('path');
var bodyParser = require('body-parser')


app.set('views', __dirname + '/views');
app.set('view engine', 'jade');
app.use(bodyParser());
app.get('/', function (req, res){
  //call function to get list
  ls = [['Lesson with Patrick', '10/16/2015'], ['Lesson with Greg', '10/15/2015']];

  res.render('index', {lessons:ls});
//  console.log('Loading home page')
//  res.sendFile(path.join(__dirname + '/lessonPage.html'));
});

app.post('/add_lesson', function(req,res){
  console.log('Adding a lesson');
  var leson_name = req.body.lesson_name;
  var date = req.body.date;
  //call sql add function
  res.send('Lesson Added');
  //res.sendFile(path.join(__dirname + '/lessonPage.html'));

});

app.post('/verify_lesson', function(req, res){
  console.log('Verifying lesson');
  var is_verified = req.body.is_verified; //'on' or undefined
  var
  if (is_verified == 'on'){
    console.log(is_verified);
  }
  res.send('Lesson Verified');
});

var server = app.listen(8888,function () {
  var host = server.address().address;
  var port = server.address().port;
  console.log('Example app listening at http://%s:%s', host, port);
});
