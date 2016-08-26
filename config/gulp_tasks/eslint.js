/**
 * Created by ralemy on 8/25/16.
 * check js files for esLint format
 */
"use strict";
import eslint from "gulp-eslint";
import config from "../config";
import path from "path";

export default function(gulp){
    const src = path.resolve(config.js.babel,"**","*.js");
    return () =>gulp.src(src).pipe(eslint()).pipe(eslint.format()).pipe(eslint.failAfterError());
}

