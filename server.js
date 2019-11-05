// var friends = require('../app/data/friends.js');
// var test = require('./htmlRoutes.js');
// var fs = require('fs');
var express = require('express');
var path = require ('path');
var routes = require('./app/routing/apiRoutes.js');
var htmlRoutes = require('./app/routing/htmlRoutes')
var friends = require('./app/data/friends');

const app = express();

var PORT = process.env.PORT || 3000;


// This api route leads to the friends object information.
app.use('/api', routes );
// This routes will check for user input after the initial slash to ensure that their entry is recognizable, if not the user is routed back to the home page by default.
app.use("/", htmlRoutes);


// This route the user to the home page.
app.get("/", function(req, res) {
    res.sendFile(path.join(__dirname, "./app/public/home.html"));
  });

 
  // This is the default setting for the web page.
  app.get('/:id', function(req, res){
    res.sendFile(path.join(__dirname, "./app/public/home.html"));

  });
  




app.listen(PORT, function(){
    console.log('Listening on PORT: ' + PORT);
});


