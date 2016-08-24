"use strict";
import path from "path";
export default {
    build: {
        destination: [path.resolve(__dirname, "..", "dist", "**"),
            path.resolve(__dirname, "..", "target", "**")]

    },
    js: {
        src: path.resolve(__dirname, "..", "src", "es6", "*.js"),
        target: path.resolve(__dirname, "..", "target", "js"),
        test: path.resolve(__dirname,"..","test","mocha","*.spec.babel.js"),
        rootFile: "boot.js"
    }
};
