(function() {

  "use strict";

  // All the express stuff here
  var express = require("express");
  var app = express();
  var server;

  // Other libraries
  var colors = require("colors");
  var fs = require("fs");

  // The main app
  var solution = require("./solution"); // an object containing methods
  var data = JSON.parse(fs.readFileSync("activity_feed.json"));
  var html = solution.generateActivityList(data);



  // Write out to an HTML file (initially)
  fs.writeFileSync("output.html", html, "utf8");



  // Setup the server

  // app.use(express.static(__dirname));
  app.get('/', function(req, res) {
    res.redirect('/output.html');
  });

  // Recompile template on each request
  app.get('/output.html', function(req, res) {

    html = solution.generateActivityList(data);

    // Write out to an HTML file
    res.send(html);
  });

  server = app.listen(3000, function() {

    var host = server.address().address;
    var port = server.address().port;

    if (host === "0.0.0.0") {
      host = "localhost";
    }

    console.log(("Test app listening at http://" + host + ":" + port).green);
  });



}).call(this);