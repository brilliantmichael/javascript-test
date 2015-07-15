(function() {

  "use strict";

  var jade = require("jade");
  var _ = require("lodash"); // our trusty "data manipulator"
  var dryify = require("dryify");
  var getval = dryify.getval;

  var solution = {

    //
    // Method that returns the parsed JSON and produces raw HTML output
    //
    // @data object the json object containing the data
    generateActivityList: function(data) {

      // Your solution starts here

      // Separate out the collections
      var tasks = data.tasks;
      //var locations = data.locations;
      var profiles = data.profiles;
      var activity_feed = data.activity_feed;

      // Synthesize a template friendly data object from the above collections
      var templateFriendlyData = _.map(activity_feed, function(v) {

        var eventType = v.event;
        var taskId = v["task_id"];
        var profileId1 = v["profile_ids"][0];
        var profileId2 = v["profile_ids"][1];

        // Retrieve the related objects
        var task = _.findWhere(tasks, {
          id: taskId
        });
        var profile1 = _.findWhere(profiles, {
          id: profileId1
        });
        var profile2 = _.findWhere(profiles, {
          id: profileId2
        });

        return {

          profileName1: getval(profile1, "abbreviated_name"),
          profileHref1: "/users/" + getval(profile1, "slug"),
          profileBg1: getval(profile1, "avatar.tiny.url"),

          profileName2: getval(profile2, "abbreviated_name"),
          profileHref2: "/users/" + getval(profile2, "slug"),
          profileBg2: getval(profile2, "avatar.tiny.url"),

          eventType: eventType,
          taskHref: "/tasks/" + getval(task, "slug"),
          taskName: getval(task, "name")
        };
      });


      // Example Jade templates:
      // http://naltatis.github.io/jade-syntax-docs/
      //
      // To print the JSON into HTML:
      // pre !{JSON.stringify(data, null, 2)}
      return jade.renderFile(
        __dirname + '/views/output.jade', // the template
        {
          activities: templateFriendlyData
        }
      );
    }
  };

  module.exports = solution;

}).call(this);