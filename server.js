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
  var ls = [];
  ls.push({name:'Lesson with Patrick', datetime:'10/16/2015', id: '5'});
  //{'name': 'Lesson with Greg', 'datetime': '10/15/2015', 'id': '10'}];

  res.render('index', {lessons:ls});
//  console.log('Loading home page')
//  res.sendFile(path.join(__dirname + '/lessonPage.html'));
});

app.post('/add_lesson', function(req,res){
  console.log('Adding a lesson');
  var leson_name = req.body.lesson_name;
  var date = req.body.date;
  var time = req.body.time;
  //call sql add function
  res.send('Lesson Added');
  //res.sendFile(path.join(__dirname + '/lessonPage.html'));

});

app.post('/verify_lesson', function(req, res){
  console.log('Verifying lesson');
  var is_verified = req.body.is_verified; //'on' or undefined
  if (is_verified == 'on'){
    console.log(is_verified);
  }
  //update sql database!
  res.send('Lesson Verified');
});

var server = app.listen(8888,function () {
  var host = server.address().address;
  var port = server.address().port;
  console.log('Example app listening at http://%s:%s', host, port);
});
