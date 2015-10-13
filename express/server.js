var express = require('express')
  , app = express();
app.get('/', function(req, res){
  res.sendFile(__dirname + '/index.html');
});
app.get('/main.js', function(req, res) {
  res.sendFile(__dirname +'/main.js');
})
app.listen(3000, function() {
  console.log('listening to 3000')
});
