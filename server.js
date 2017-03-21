//requirement 
var express = require("express");

//you create a app
var app = express();

//which folder
app.use(express.static('app'));

//start the server
app.listen(3000, function(){
	console.log('App running on 3000 port!');
});