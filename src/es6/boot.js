/**
 * Created by ralemy on 8/23/16.
 * Sample ES6 script to be transformed to JS using Babel
 */

require(".././main.scss");

import Point from "./Point";
var body = document.querySelector("div#contents");
body.textContent = `Good Point ${new Point(1,23)}`;

