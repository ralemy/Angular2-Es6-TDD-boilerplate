"use strict";

import gulp from "gulp";
import gulpSequence from "gulp-sequence"
import cleanTask from "./gulp_tasks/clean";
import babelTask from "./gulp_tasks/babel";
import webpackTask from "./gulp_tasks/webpack";


gulp.task("clean",cleanTask());

gulp.task("babel", babelTask(gulp));

gulp.task("webpack",webpackTask());

gulp.task("build",gulpSequence("clean","babel","webpack"));