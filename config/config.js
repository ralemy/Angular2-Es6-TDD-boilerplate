"use strict";
import path from "path";
export default {
    build: {
        destination: [path.resolve(__dirname, "..", "dist", "**"),
            path.resolve(__dirname, "..", "target", "**")],
        path: path.resolve(__dirname,"..","dist")

    },
    js: {
        src: path.resolve(__dirname, "..", "src", "app", "*.js"),
        babel: path.resolve(__dirname,"..","src"),
        target: path.resolve(__dirname, "..", "target", "js"),
        test: path.resolve(__dirname,"..","test","mocha","*.spec.babel.js"),
        rootFile: path.resolve(__dirname,"..","src","app","main.js"),
        rootPage: path.resolve(__dirname,"..","src","app","index.pug")
    }
};
