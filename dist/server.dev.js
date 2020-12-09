"use strict";

var express = require('express'); // access express library in node_modules


var bodyParser = require('body-parser');

var app = express(); // express constructor

app.use(bodyParser.json());
app.set('view engine', 'pug'); // Creating object to contain user data

var mockUserData = [{
  name: 'Mark'
}, {
  name: 'Jill'
}]; // Adding first GET route to system

app.get('/users', function (req, res) {
  res.json({
    sucess: true,
    message: "successfully got users. Nice!",
    users: mockUserData
  });
});
/**
   * Here, ':id is treated as a variable' 
   * You can use dynamic variables to search for specific data associated with an id in your database, and return that (instead of just returning the id)
 */

app.get('/users/:id', function (req, res) {
  console.log(req.params.id);
  res.json({
    success: true,
    message: "got one user",
    user: req.params.id
  });
});
/**
 * Handling POST request to 'login' endpoint 
 * As a security precaution, you should never save passwords directly into your database. Use a tool like bcrypt to save a hashed version, which will be decoded at login. 
 */

app.post('/login', function (req, res) {
  // Typically passwords are encrypted using something like bcrypt before sending to database
  var username = req.body.username;
  var password = req.body.password; // This should come from db

  var mockUsername = "billyTheKid";
  var mockPassword = "superSecret";

  if (username === mockUsername && password === mockPassword) {
    // In practice, use JSON web token sign method here to make an encrypted token
    res.json({
      sucess: true,
      message: 'password and username match!',
      token: 'encrypted token goes here'
    });
  } else {
    res.json({
      sucess: false,
      message: 'password and username do not match'
    });
  }
}); // Using PUG template

app.get('/', function (req, res) {
  res.render('index', {
    title: "Home Page",
    content: "This is a content in Home Page!"
  });
});
/**
 * ----- Server ------
 * You can reset the server automatically when you make changes using a tool called nodemon
 */

app.listen(8000, function () {
  return console.log("server is running");
}); // start server in port 8000
//# sourceMappingURL=server.dev.js.map
