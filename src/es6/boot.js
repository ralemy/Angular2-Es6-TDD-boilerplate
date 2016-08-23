/**
 * Created by ralemy on 8/23/16.
 * Sample ES6 script to be transformed to JS using Babel
 */

import Point from "./Point";
var body = document.querySelector("body");
body.textContent = `Good Point ${new Point(1,23)}`;

