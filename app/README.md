# Friend Finder

Having an issue finding friends? Friend Finder takes finding friends to the next level, by matching you with a partner in our database that shares similar responses to you. There is no substitute for a good friend! Happy coding friends.

## Technologies used:
*NodeJS
*MySQL
*ExpressJS
*HTML
*CSS
*BootStrap

## My role:
This app uses routers from the public folder to the server, which took me a bit of time to understand how to use, given the fact that this is the first time I created one. After a while I was able to create some middleware on the server page to have public files use the server to access api information, update server data and outputting the user match after they click on the submit button. Retreiving the data from the post request was coming back undefined until I began to designate areas where I convert JSON to more usable objects and vice versa.

When working with bootstrap to work with the drop down boxes and modals on the page, I found it very clunky, and useless to download popper. So to keep my sanity, I manipule drop down boxes with the use of Javascript click events which alter the attributes of the HTML elements to get them to work the way I want them to. The modal took a little bit of acrobatics to get working with out the button provided, but I needed a way to have the modal render after the user information was checked and their match was found.


## Model
[Click me for a video demonstration](https://youtu.be/LVAEfEIVN9M)

## Link to Heroku:
[Friend Finder site](https://grisly-eyeballs-23418.herokuapp.com/)

