import path from "path";
import {protractor} from "gulp-protractor";
import config from "../config";
const cfg = path.resolve(__dirname, "..", "protractor.config.js");

export default function (gulp) {
    return () => gulp.src([config.build.e2e])
        .pipe(protractor({
            configFile: cfg
        }));
}