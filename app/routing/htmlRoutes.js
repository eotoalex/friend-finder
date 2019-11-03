
var path = require('path');
var express = require('express');
var Router = express.Router();

// This routes the user to the survey page.
Router.get('/survey', function(req,res){
res.sendFile(path.join('/Users/HasBeenWriter/Desktop/Repos/friend_finder/app/public/survey.html'));
});

// Default catch all if the user inputs an identifiable id.
Router.get('/:id', function(req, res, next){
    if (req.params.id === "1"){
      res.send(req.params.id);
    }else{

      // This allows the next handler to begin if applicable.
      next();
    }

  });


module.exports = Router;