var express = require('express')
var app = express()
var http = require('http')
var PORT = "7000"
var path = require('path')
//var bodyParser = require('body-parser');
var parseString = require('xml2js').parseString;
var fs = require('fs');

var xml2js = require('xml2js');
var parser = new xml2js.Parser();
 var output;
var validateResult = require('./validateResult.js')



app.use(express['static'](__dirname + '/public'))

app.set('port',  process.env.PORT || PORT)

app.get('/service',function(req,res){
	fs.readFile(__dirname + '/data.xml',function(err,data){
	parser.parseString(data,function(err, result){
		if(validateResult(result))
		res.json({result: 'Valid Data'})
		else {
		res.json({result: 'Not a Valid Data'})
	}	
	});
})
})

var server = http.createServer(app)

server.listen(app.get('port'),function(error){
	if(error){
		console.log(error.toString())
	}
	console.log('Server started: Listening on port 7000')
})


