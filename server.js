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


// These are the routers to my other pages in the routing folder.
app.use('/api', routes );
app.use("/", htmlRoutes);


app.get("/", function(req, res) {
    res.sendFile(path.join(__dirname, "./app/public/home.html"));
  });

  app.get('/:id', function(req, res, next){
    if (req.params.id === "1"){
      res.send(req.params.id);
    }else{
      // This allows the next handler to take effect (default) if the user puts in an unrecognizable id.
      next();
    }

  });

  // This is the default setting for the web page.
  app.get('/:id', function(req, res){
    res.sendFile(path.join(__dirname, "./app/public/home.html"));

  });






app.listen(PORT, function(){
    console.log('Listening on PORT: ' + PORT);
});


