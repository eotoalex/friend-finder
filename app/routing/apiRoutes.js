var friends = require('../data/friends.js');
var express = require('express');
var Router = express.Router();
var bodyParser = require('body-parser');


// User data needs to be parsed with this urlencodedParser in order to be accepted into the req.body property in the post request.
var urlencodedParser = bodyParser.urlencoded({ extended: true });




// Router.post('/friends/:id', function(req,res){
// var newEntry = req.body;

//     var obj = friends.friends;
//     obj.push(newEntry);

// res.json(newEntry)

    

    
    
// });



// This takes the middleware .use and the user inputting /api then /friends to access the friends data object.
Router.get('/friends', function(req,res){
    res.json (friends.friends);
 
});

Router.post('/friends',urlencodedParser,function(req,res){

var newUser = req.body;

friends.friends.push(newUser);

// res.json(newUser);

console.log(newUser);
console.log(friends);
console.log('Length -->'+friends.friends.length);


});



module.exports = Router;

