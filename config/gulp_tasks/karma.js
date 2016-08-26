/**
 * Created by ralemy on 8/25/16.
 * gulp unit tests through karma.
 */
"use strict";
import path from "path";
import Karma from "karma"

export default function () {
    return (done) => {
        new (Karma.Server)({
            configFile: path.resolve(__dirname, "..", "karma.config.js"),
            singleRun: true,
            autoWatch: false
        }, (result)=> {
            return (result > 0) ? done(new Error(`Karma exited with ${result}`)) : done();
        }).start();
    }
}