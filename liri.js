// Require for the dotenv module
require("dotenv").config();

// Variable to require request
var request = require('request');

// Variable to require twitter module
var Twitter = require('twitter');

// Variable to requie spotify api
var Spotify = require('node-spotify-api');





// ????from dotenv documentation
const result = dotenv.config()
 
if (result.error) {
  throw result.error
}
 
console.log(result.parsed)

// ????from twitter npm documentation
var params = { screen_name: 'nodejs' };
client.get('statuses/user_timeline', params, function (error, tweets, response) {
  if (!error) {
    console.log(tweets);
  }
});

// ?????From spotify npm documentation
spotify.search({ type: 'track', query: 'All the Small Things' }, function(err, data) {
  if (err) {
    return console.log('Error occurred: ' + err);
  }
 
console.log(data); 
});