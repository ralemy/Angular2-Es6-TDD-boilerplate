/**
 * Created by ralemy on 8/26/16.
 * configuration for protractor
 */
"use strict";
let fs = require('fs');
let path = require('path');

exports.config = {
    baseUrl: 'http://localhost:8099/',
    framework: 'jasmine',

    seleniumServerJar: findSeleniumJar(),

   useAllAngular2AppRoots: true
};

function findSeleniumJar() {
    var dir = path.resolve(__dirname, "..",
        "node_modules", "protractor",
        "node_modules", "webdriver-manager",
        "selenium");

    var files = fs.readdirSync(dir);
    var jar = files.filter(function (file) {
        return /\.jar$/.test(file);
    })[0];

    if (!jar) {
        console.error('Selenium Server JAR was not found. Run `npm run webdriver-update`.');
        process.exit(1);
    }
    console.log(path.resolve(dir,jar));
    return path.resolve(dir, jar);
}