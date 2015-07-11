(function() {


  "use strict"; // strict!! 0_0

  var colors = require("colors");
  var fs = require("fs");
  var assert = require("assert"); // node's native assertion library
  var async = require("async");


  // Make sure person running test has mocha -g
  if (typeof describe !== 'function') {
    throw ("Please run this test using:\n\t$ mocha");
  }


  describe("The HTML files", function() {

    // We want to compare these two files
    var filePaths = [{
      name: "expected",
      path: "expected_output.html"
    }, {
      name: "output",
      path: "output.html"
    }];

    var content = {};


    async.each(filePaths, function(currentValue, asyncCb) {


      describe(currentValue.path, function() {

        it("should exist", function(done) {
          // Assign the values to the @content object for use later
          content[currentValue.name] =
            // Use async file loading so we can control test flow
            fs.readFileSync(currentValue.path, "utf8");

          it("and should have some content", function() {
            assert.equal(
              typeof content[currentValue.name],
              "string",
              "but isn't a string"
            );
            assert.notEqual(
              content[currentValue.name].length,
              0,
              "but has zero length"
            );
          });

          asyncCb();
          done();
        });

      });

    }, function(err) {

      describe("The two content files", function() {

        it("should be equivalent", function() {

          if (content.output === content.expected) {

            console.log(
              ("\t[" + (typeof content.output) + "] does in fact equal [" + (typeof content.expected) + "]").gray,
              "\n\tCongratulations, looks like you have it working ;)".yellow
            );
          } else {

            console.log(
              ("\t[" + (typeof content.output) + "] does not in fact equal [" + (typeof content.expected) + "]").gray
            );
            throw ("Not quite there yet, keep at it.");
          }
        });
      });

    });


  });

}).call(this);