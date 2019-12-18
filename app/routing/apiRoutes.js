var friends = require('../data/friends.js');
var express = require('express');
var Router = express.Router();
var bodyParser = require('body-parser');

// User data needs to be parsed with this urlencodedParser in order to be accepted into the req.body property in the post request.
var urlencodedParser = bodyParser.urlencoded({ extended: true });

// This takes the middleware .use and the user inputting /api then /friends to access the friends data object.
Router.get('/friends', function(req,res){
    res.json (friends.friends);
});

Router.post('/friends',urlencodedParser,function(req,res){

var newUser = req.body;
var friendsData = friends.friends;

friendsData.push(req.body);



// This sends the response object back to the user to see who they matched with.
res.json(checkingForMatches(friendsData,newUser));


});

var checkingForMatches = function (friendsObj,usr){
    
    var usrObj = usr;
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
    var postResponse = sumArr(matchList);
    return postResponse;
    
           
        //    This function has to take in the object and compare the diff values between friends.
            function sumArr (obj){
                console.log(obj);
                var newArr = []; 
                for(var i = 0; i < obj.length; i++){
                    newArr.push(obj[i].diff);
                }
                var smllNum = Math.min(...newArr);
                for(var j = 0; j < obj.length; j++){
                    if(obj[j].diff === smllNum){
                        
                        

                        var match = {
                            name:obj[j].name,
                            photo:obj[j].photo,
                            
                        }

                       
                        
                      return match;
                    }
                    
                }
               
              
               
            };
            
            
   
}



module.exports = Router;

