This is a repo with a basic jasmine setup suite. I wanted this repo to be able to handle 3 things,
1) Be able to run a local spec runner on a browser so I could test locally.
2) Be able to run my tests in a headless browser so I could put the process  in a box somewhere like jenkins and have them run my tests for me.
3) Be able to run es6 in both environments.

`npm i` and then you can run `npm test` to launch the local test server at 8888. Run `npm run phantom` to run the tests in a headless browser.

I originally put this repo together with node 6 (webpack seems to run super quick this way), however it does run in node 4.2.x.

Right now, tests are marked with a .spec.js extension. The globs look for tests in the src file.

The specRunner in .test is not the specRunner that runs with the command `npm test`, it is used with the phantom tests.

Any contributions welcome!

TODO:
- look into livereloaders
- pull out configurables into a suite config file to make it easier to change test paths etc
