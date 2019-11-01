// var friends = require('../app/data/friends.js');
// var test = require('./htmlRoutes.js');
// var fs = require('fs');
var express = require('express');
var path = require ('path');
var apiRoutes = require('./app/routing/apiRoutes.js');
var friends = require('./app/data/friends');

const app = express();

var PORT = process.env.PORT || 3000;

// console.log(friends);

// This get request get information for the apiRoutes.js file.

// app.get('/friends', function(req,res){
//     friends.friends.push(
//         {name:'ksdkkdkskdfks'});
//     res.send(friends);
   
// });

// app.get('/home', function(req, res){

// });
// app.use('/friends', apiRoutes);

app.use('/friends', apiRoutes);

app.get("/", function(req, res) {
    res.sendFile(path.join(__dirname, "./app/public/home.html"));
  });

  app.get("/survey", function(req, res) {
    res.sendFile(path.join(__dirname, "./app/public/survey.html"));
  });



// app.post('/friends', function(req,res){

// });

app.listen(PORT, function(){
    console.log('Listening on PORT: ' + PORT);
});


