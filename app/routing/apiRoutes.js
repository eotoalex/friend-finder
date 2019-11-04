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
    var usrScore = usr.scores
    
    var arrLength = friendsObj.length
    var dataObj = friendsObj;
    var matchList = [];
    var scoreTotals=[];
    var result = 0;
    var counter = 0;

    
    console.log(friendsObj[0].scores)

    for (var i = 0; i < arrLength; i++){
    var friendsScore =friendsObj[i].scores;
    counter++;
   
    
        for (var j = i +1; j < usr.scores.length; j++){
            if (parseInt(usrScore) < parseInt(friendsScore)){
                result += parseInt(friendsScore) - parseInt(usrScore); 
            }else {result += parseInt(usrScore) - parseInt(friendsScore)}

           scoreTotals.push(result);

        };
        matchList.push({
            name:dataObj[i].name,
            photo:dataObj[i].photo,
            result:scoreTotals,
            counter:counter
        })
        
        
    };

    

    console.log(matchList)
   
}
module.exports = Router;

