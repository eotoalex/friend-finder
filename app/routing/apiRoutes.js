var friends = require('../data/friends.js');
var express = require('express');
var Router = express.Router();



Router.get('/friends', function(req,res){
    res.json(friends);
    console.log("we are in the apiRoutes folder")
    
});

module.exports = Router;

