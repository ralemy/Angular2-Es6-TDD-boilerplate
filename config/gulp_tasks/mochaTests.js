"use strict";
import config from "../config";
import mocha from "gulp-mocha";
import util from "gulp-util";

export default function(gulp) {
    return () => gulp.src(config.js.test).pipe(mocha())
        .on("error", ()=>gulp.emit("end"));
}