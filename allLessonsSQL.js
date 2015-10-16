var http = require('http');
var pg = require('pg');

var conString = 'postgres://nitrous:postgres@0.0.0.0:5432';
pg.connect(conString, function(err, client, done) {
  if(err) {
    return console.error('error fetching client from pool', err);
  }
/*client.query('CREATE TABLE lessons_attendance(LessonId Int,LessonName Text,DateTime timestamp,AttendanceTaken boolean,LessonAttended boolean);', function(err,result){
   done();

   if(err) {
      return console.error('error running query', err);
    }
  console.log(result.rows);
});
  client.query('INSERT INTO lessons_attendance (LessonName, AttendanceTaken, LessonAttended) VALUES ("Joey Lesson", TRUE, TRUE), ("Billy Lesson", TRUE, FALSE), ("Tina Lesson", FALSE, FALSE);', function(err,result){
   done();

   if(err) {
      return console.error('error running query', err);
    }
  console.log(result.rows);
});
*/
var query = client.query('SELECT lessonname FROM lessons_attendance;', function(err,result){
   done();

   if(err) {
      return console.error('error running query', err);
    }
 query.on('row', function(row) {
      console.log(row.lessonname.tostring);
 });
});
});


