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
var site = process.argv[2];
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
  console.log(search);
}

