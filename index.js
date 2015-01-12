var express = require('express')
var app = express();
var fs=require('fs')

//var buf=fs.readFileSync('\htmlfile.html');
//var str=buf.toString();

app.set('port', (process.env.PORT || 5000))
app.use(express.static(__dirname + '/public'))

app.get('/', function(request, response) {
 var buf=fs.readFileSync('/views/singlehtml.html');
 var str=buf.toString();
 response.send(str)
//'I think I got this now')
})

app.listen(app.get('port'), function() {
  console.log("Node app is running at localhost:" + app.get('port'))
})
