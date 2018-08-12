// Require for the dotenv package
require("dotenv").config();

// Global variable for the keys
var keys = require("./keys");

//Global Varibales for necessary npm packages for the API's
// var Twitter = require("twitter");
var Spotify = require('node-spotify-api');
var request = require("request");

// Variables for console arguements
// Takes in the predetrmined phrases for each API
var siteStatement = process.argv[2];
// This will take in what is being searched for
var searchTerm = process.argv;
var search = "";
// Loops over the searchTerm which begins at index[3]
for (var i = 3; i < searchTerm.length; i++) {
  // If more than one word it concatinates the searchTerm
  if (i > 3 && i < searchTerm.length) {
    search = search + "+" + searchTerm[i];
  }
  // If just one word
  else {
    search += searchTerm[i];
  }
  // console.log(search);
}

// Function for Spotify API search
function spotify() {
  // Variable to load the keys for  my spotify account  
  var spotify = new Spotify(keys.spotify)
  // Sets search equal to what is being searched for or "The sign" if nothing is inputed
  search = search || "The Sign Ace Base";
  // Call to the Spotify API based on search of track name
  spotify.search({ type: 'track', query: search, limit: 1 }, function (err, data) {
    // If error occurs -- console log it
    if (err) {
      return console.log('Error occurred: ' + err);
    }
    // loop over JSON response
    for (var i = 0; i < data.tracks.items.length; i++) {
      // Console logs Artist, song name, album name, and a preview link from the JSON response
      console.log("Artist: " + data.tracks.items[i].artists[0].name);
      console.log("Song name: " + data.tracks.items[i].name);
      console.log("Album name: " + data.tracks.items[i].album.name);
      console.log("Preview Link: " + data.tracks.items[i].preview_url);
    }
  });
}

// Switch Statements based on siteStatement to call the appropriate API function
switch (siteStatement) {
  case "spotify-this-song":
    spotify();
    break;
  case "do-what-it-says":
    doWhatItSays();
    break;
  case "movie-this":
    omdb();
    break;
}

// Function for the siteStatement "Do-what-it-says" which uses the search in the random.txt file 
function doWhatItSays() {
  // Variable and require for CORE Module fs("file systems") 
  var fs = require("fs");
  // readFile for random.txt
  fs.readFile("./rondom.txt", "utf8", function (error, data) {
    // If error occurs -- console log it
    if (error) {
      return console.log(error);
    }
    // Variable to reformat the content of random.txt
    var random = data.split(",");
    siteStatement = random[0];
    search = random[1];
    // Call for function spotify using the search from random.txt
    spotify();
  });
}

// Function for OMDB API search
function omdb() {
  // Sets search equal to what is being searched for or "Mr. Nobody" if nothing is inputed
  search = search || "Mr. Nobody"
  // Call to the OMDB API based on search
  var queryUrl = "http://www.omdbapi.com/?t=" + search + "&y=&plot=short&apikey=a28224d5";
  // JSON response
  request(queryUrl, function (error, response, body) {

    // If the JSON response is error free
    if (!error && response.statusCode === 200) {
      // console log the following from the JSON response
      console.log("Title: " + JSON.parse(body).Title);
      console.log("Release Year: " + JSON.parse(body).Year);
      console.log("Rated: " + JSON.parse(body).Rated);
      console.log("Rotten Tomatoes Rating: " + JSON.parse(body).Ratings[1].Value + " Fresh");
      console.log("Produced in: " + JSON.parse(body).Country);
      console.log("Language(s): " + JSON.parse(body).Language);
      console.log("Plot: " + JSON.parse(body).Plot);
      console.log("Starring: " + JSON.parse(body).Actors);
    }
  })
}

