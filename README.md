##Airtasker Javascript Test

---

Sunday, 12 July 2015

###Implementation details

| Feature     | Module      | Comments  |
| ----------- |:-----------:| ---------:|
| Tests       | Mocha       | -         |
| Server      | Express 1.4 | -         |
| Templating  | Jade        | -         |

###How to test and run

Context is in ```package.json ```.

To run, navigate to the application root and run:

    # Tests
    npm test

NB: The test will probably fail for the original test that checks for the raw HTML equivalence. The Jade template in this implementation won't necessarily product the exact same string, but it will produce identical HTML elements.

    # To see the generated HTML in a browser at http://localhost:3000
    npm start

---

###Objective

You have been provided with "main.js".  This is the entry point of the application.  This script will load the JSON file "activity_feed.json" which is parsed and then passed to an empty method "solution.generateActivityList".  You can run the script with

    node main.js

Your task is to implement the "generateActivityList" method.  This method is expected to generate HTML that matches the example in "expected_output.html".

You can test your output against the expected output with

    node test.js


We encourage you to ask any questions about the exercise.

You are not restricted to a single function or file.  You can structure your solution however you like.

You are welcome to use any node modules or third party libraries you see fit.

Best of luck ;)