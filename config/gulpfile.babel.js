"use strict";

import gulp from "gulp";
import cleanTask from "./gulp_tasks/clean";
import webpackTask from "./gulp_tasks/webpack";
import unitTests from "./gulp_tasks/mochaTests";
import serve from "./gulp_tasks/serve";

gulp.task("clean",cleanTask());

gulp.task("webpack",["clean"],webpackTask());

gulp.task("test", ["webpack"],unitTests(gulp));

gulp.task("build",["test"],()=>true);

gulp.task("serve",["build"],serve());