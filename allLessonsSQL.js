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
  client.query("INSERT INTO lessons_attendance (LessonName, AttendanceTaken, LessonAttended) VALUES ('Joey Lesson', TRUE, TRUE), ('Billy Lesson', TRUE, FALSE), ('Tina Lesson', FALSE, FALSE);", function(err,result){
   done();

   if(err) {
      return console.error('error running query', err);
    }
  console.log(result.rows);
});

var query = client.query('SELECT lessonname FROM lessons_attendance;', function(err,result){

//console.log(result);
   if(err) {
      return console.error('error running query', err);
    }

   done();
});*/
 var query = client.query('SELECT * FROM lessons_attendance;');
  query.on('row', function(row) {
   if (row.lessonattended === true){
     console.log(row.lessonname + ' was attended');
   } else if (row.attendancetaken === false){
     console.log(row.lessonname + ' has no attendance taken')
   }else {
     console.log(row.lessonname + ' was not attended')
   }
    
    console.log("row received " + row.lessonname + ' ' + row.attendancetaken);
    done();

 });
});


