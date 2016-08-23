"use strict";
import babel from "gulp-babel";
import config from "../config";

export default function (gulp) {
    return () => gulp.src(config.js.src).pipe(babel()).pipe(gulp.dest(config.js.target));
}