"use strict";

import gulp from "gulp";
import cleanTask from "./gulp_tasks/clean";
import lintTask from "./gulp_tasks/eslint";
import webpackTask from "./gulp_tasks/webpack";
import unitTests from "./gulp_tasks/mochaTests";
import karmaTests from "./gulp_tasks/karma";
import serve from "./gulp_tasks/serve";

gulp.task("clean",cleanTask());

gulp.task("lint",["clean"],lintTask(gulp));

gulp.task("webpack",["lint"],webpackTask());

gulp.task("mocha", ["webpack"],unitTests(gulp));

gulp.task("test", ["webpack"],karmaTests());

gulp.task("build",["test"],()=>true);

gulp.task("serve",["build"],serve());