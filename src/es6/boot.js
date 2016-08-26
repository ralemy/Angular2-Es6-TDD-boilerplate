/**
 * Created by ralemy on 8/23/16.
 * Sample ES6 script to be transformed to JS using Babel
 */

require("../scss/main.scss");

import Point from "./Point";
const body = document.querySelector("div#contents");
body.textContent = `Good Point ${new Point(1, 23)}`;

