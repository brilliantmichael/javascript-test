(function() {

  var fs = require("fs");
  var solution = require("./solution"); // an object containing methods

  var data = JSON.parse(fs.readFileSync("activity_feed.json"));
  var html = solution.generateActivityList(data);

  // Write out to an HTML file
  fs.writeFileSync("output.html", html, "utf8");

}).call(this);
