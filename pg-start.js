var pg = require('pg');

var connectionString = ('postgres://nitrous@localhost:5432');
var allLessons = pg.connect(connectionString, function(err, client, done){
  allLessons = client.query('select * from lessons_attendance', function(err, result))
}) ;
  console.log(allLessons);