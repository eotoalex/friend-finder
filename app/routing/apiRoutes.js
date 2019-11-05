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


friendsData.push(req.body)



checkingForMatches(friendsData,newUser);

res.send("hi");


});

function  checkingForMatches(friendsObj,usr){
    
    var usrObj = usr;
    var usrScore = usr.scores
    
    var arrLength = friendsObj.length
    var dataObj = friendsObj;
    var matchList = [];


    for (var i = 0; i <= friendsObj.length - 1; i++){
        var result = 0;

        for (var j = 0; j < 10; j++){
            if (parseFloat(usrObj.scores[j]) > friendsObj[i].scores[j]){
            result += (parseFloat(usrObj.scores[j]) - friendsObj[i].scores[j]);}
                else if(parseFloat(usrObj.scores[j]) < friendsObj[i].scores[j]){
                    result += friendsObj[i].scores[j] - parseFloat(usrObj.scores[j])
                }  
        }
        if(friendsObj[i].name !== usrObj.name){
        matchList.push({
            name:friendsObj[i].name,
            photo:friendsObj[i].photo,
            diff:result,
           
        });      
    }  
  
    }
    sumArr(matchList);
           
        //    This function has to take in the object and compare the diff values between friends.
            function sumArr (obj){
                
                var newArr = []; 
                for(var i = 0; i < obj.length; i++){
                    newArr.push(obj[i].diff);
                }
                var smllNum = Math.min(...newArr);
                for(var j = 0; j < obj.length; j++){
                    if(obj[j].diff === smllNum){
                        
                        console.log(obj[j].name);
                        console.log(obj[j].photo);
                        console.log(obj[j].diff);

                        var match = {
                            name:obj[j].name,
                            photo:obj[j].photo,
                            bio: obj[j].bio
                        }

                        


                    }
                }
                console.log(obj);

               
            };

    
   
}



module.exports = Router;

