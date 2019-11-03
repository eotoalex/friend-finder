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
var friendsData = friends.friends;
// var userIndex = arr.length;

// var userScore = friends.friends[i].scores[userScore]
friendsData.push(req.body)

// console.log(friendsData,newUser);

checkingForMatches(friendsData,newUser);

res.json(newUser)


});

function  checkingForMatches(friendsObj,usr){
    
    var usrObj = usr;
    var arrLength = friendsObj.length
    var dataObj = friendsObj;
    var matchList = [];

    // console.log(friendsObj[7].scores);
    // console.log(typeof friendsObj.length)
    // console.log(usrObj[friendsObj.length].name);
    console.log(usr.scores)

    // console.log(usr);
    
    // for(var i = 0; i < arrLength; i++){
    //     var usrScore = friendsObj[i].scores;
    //     var friendScore = friendsObj[i].scores;
    //     var scoresLen = friendsObj[i].scores.length

    //     for(var j = 0; j < scoresLen; j++){
    //         if (usrScore[j] < friendScore[j]){
    //             result = friendScore[j] - usrScore[j];
    //         }else{
    //             result = usrScore[j] - friendScore[j];
    //         }
    //     }
    // }
}
module.exports = Router;

