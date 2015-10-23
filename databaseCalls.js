
/*function alldata (callback) {
  (function databasecall(err, data) {
    if (err) {
      console.log("error!");
      callback(err);
    } else {
*/
var http = require('http');
var pg = require('pg');
var alldatavar = [];
var conString = 'postgres://nitrous:postgres@0.0.0.0:5432';



 pg.connect(conString, function(err, client, done) {
  if(err) {
    return console.error('error fetching client from pool', err);
  }

  var query = client.query("SELECT * FROM lessons_attendance;");

  query.on('row', function(row, result){
    console.log('query row')
    alldatavar.push(row);
  })

   query.on('end',function(){
   console.log(alldatavar);
    //var alldata = alldatavar;
     //console.log(alldata);
     console.log('query end')
 //    callback(alldatavar);
     // exports.alldata = alldata;

    });

                                     done();
});
//    };
 //   });

//  };
/*function logdata (){
  console.log(alldatavar);
  console.log('logdata');
}
exports.alldata = alldata(logdata);*/