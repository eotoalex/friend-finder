

// Your `htmlRoutes.js` file should include two routes:

//    * A GET Route to `/survey` which should display the survey page.
//    * A default, catch-all route that leads to `home.html` which displays the home page.
var path = require('path');
var express = require('express');
var Router = express.Router();

Router.get('/survey', function(req,res){
res.sendFile(path.join('/Users/HasBeenWriter/Desktop/Repos/friend_finder/app/public/survey.html'));
});



module.exports = Router;