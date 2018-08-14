# LIRI-Node-Bot

### This was a homework assignment for the UCF Coding Boot Camp. In this assignment we are using Node.js to access The OMDB API & Spotify API through the aid of NPM packages. Then using various search commands return a JSON response and console.log certain pieces of the response. We are also hiding keys using .env.

---
## Screenshots
![Alt Text](http://g.recordit.co/sKxHirNUSB.gif)
### If user enters spotify-this-song (search term), then the call is made to the Spotify Api to return the (search term) entered. If no (search term) is entered, then it is set to automatically return the song The Sign by Ace of Base.

![Alt Text](http://g.recordit.co/b6TleHfEzD.gif)
### If user enters movie-this (serach term), then the call is made to OMDB Api to return the (search term) entered. If no (search term) is entered, then it is set to automatically return the movie Mr. Nobody.

![Alt Text](http://g.recordit.co/xOAQI2nPGq.gif)
### In this final example, if the user enters do-what-it-says. First it reads the random.txt file which contains the following string: 
### spotify-this-song,"I Want it That Way"
### This is then split at the comma and passed through the Spotify Api to return the song by the Backstreet Boys.
---
## Technologies Used
* JavaScript
* Node.js
* NPM packages
* process.env
* Visual Studio Code
