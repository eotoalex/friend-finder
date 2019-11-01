var friends = require('../data/friends.js');
var express = require('express');
var Router = express.Router();




// Router.post('/friends/:id', function(req,res){
// var newEntry = req.body;

//     var obj = friends.friends;
//     obj.push(newEntry);

// res.json(newEntry)

    

    
    
// });



// This takes the middleware .use and the user inputting /api then /friends to access the friends data object.
Router.get('/friends', function(req,res){
    res.send(friends.friends);
 
});



module.exports = Router;

