var express = require('express');
var path = require('path');
var app = express();

var bodyparser = require('body-parser');
app.use(bodyparser.urlencoded());
app.use(bodyparser.json());


app.use(express.static(path.join(__dirname,'/')));
var server = app.listen(process.env.PORT || 8000, function() {
 console.log("listening on port 8000");
})