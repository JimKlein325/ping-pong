
var pingPong = require('./ping-pong.js').pingPong;
var prompt = require('prompt');
prompt.start();

prompt.get('goal', function(err, result) {
  var result = pingPong(result.goal);
  result.forEach(function(element) {
    console.log(element);
  });
});


/*var
Original code
pingPong = require('./ping-pong.js').pingPong;

console.log('Ping-pong up to 100');
var result = pingPong(100);
result.forEach(function(element){
  console.log(element);
});
*/
