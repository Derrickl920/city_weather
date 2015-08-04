var express = require('express');
var path = require('path');
var app = express();

var bodyparser = require('body-parser');
app.use(bodyparser.urlencoded());
app.use(bodyparser.json());


app.use(express.static(path.join(__dirname,'/')));
app.listen(8000, function(){
	console.log('running on port 8000');
})