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



checkingForMatches(friendsData,newUser);

res.json(newUser)


});

function  checkingForMatches(friendsObj,usr){
    
    var usrObj = usr;
    var usrScore = usr.scores
    
    var arrLength = friendsObj.length
    var dataObj = friendsObj;
    
   
    // var result = 0;

   

    
    

    for (var i = 0; i < arrLength - 1; i++){
        var friendScore = friendsObj[i].scores;
        var scoreTotals=[];
        var matchList = [];
        var result = 0;
    
        for (var j = 0; j < 10; j++){
           
            result += (parseInt(usrScore[j]) - friendScore[j]);
            if(Math.sign(result)===-1){
                result += (result * -1);
            }
            
            

        }
        
        
        // Debug the score totals so that the a correct numbers are subtracted and complete the modal with the images when the match is made.
        matchList.push({
            name:friendsObj[i].name,
            photo:friendsObj[i].photo,
            diff:result,
            
        });

        
        
    
       
    }
    console.log(matchList.length)
   
            // This function takes in an array and adds up all of its properties to determine the total.
           
        //    This function has to take in the object and compare the diff values between friends.
            function sumArr (arr){
                var sum = 0;
                for(var i = 0; i < arr.length; i++){
                     sum = arr[i] + sum;
                };
                return sum;
            };

    
   
}
module.exports = Router;

