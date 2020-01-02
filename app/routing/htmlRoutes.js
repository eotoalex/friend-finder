var path = require('path');
var express = require('express');
var router = express.Router();

// This routes the user to the survey page.
router.get('/survey', function(req,res){
  res.sendFile(path.join(__dirname,'../public/survey.html'));
});

// Default catch all if the user inputs an identifiable id.
router.get('/:id', function(req, res, next){
    if (req.params.id === "1"){
      res.send(req.params.id);
    } else{
      // This allows the next handler to begin if applicable.
      next();
    }
});


module.exports = router;