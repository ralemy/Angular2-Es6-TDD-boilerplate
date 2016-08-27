#Boilerplate Angular ES6 TDD development project


This is a boilerplate with the following properties:

- Angular2 rc5 framework
- ES6 instead of Typescript 
- TDD with karma and Jasmine
- Bundling with Webpack
- Jsformating with ESLint
- Task management with Gulp.
- Dev deployment with Webpack dev server
- End to end testing with Protractor

clone it and run `npm install` for dependencies,

then use `npm run gulp [command]` to run differennt commands:

`npm run gulp serve` will clean, lint, build and test the project and start
a server to serve it on port 8099.

you can use each command on its own
e.g. `npm run gulp test` will clean, lint, build, and test.

To run protractor end-to-end tests, first serve your application with
`npm run gulp serve`, then in a separate shell, run protractor with
`npm run gulp protractor`. write your end-to-end tests in `src/e2e` 
directory.


