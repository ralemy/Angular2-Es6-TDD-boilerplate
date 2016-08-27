"use strict";
import path from "path";
export default {
    build: {
        destination: [path.resolve(__dirname, "..", "dist", "**"),
            path.resolve(__dirname, "..", "target", "**")],
        path: path.resolve(__dirname,"..","dist"),
        e2e: path.resolve(__dirname,"..","src","e2e","**","*.spec.js")
    },
    js: {
        src: path.resolve(__dirname, "..", "src", "app", "*.js"),
        babel: path.resolve(__dirname,"..","src"),
        rootFile: path.resolve(__dirname,"..","src","app","main.js"),
        rootPage: path.resolve(__dirname,"..","src","app","index.pug")
    }
};
