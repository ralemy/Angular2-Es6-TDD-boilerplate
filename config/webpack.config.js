"use strict";
import path from "path";
import config from "./config";

module.exports = {
    entry: {
        app: path.resolve(config.js.target, config.js.rootFile)
    },
    output: {
        path: path.resolve(__dirname, "..", "dist"),
        publicPath: "../dist/",
        filename: "[name].bundle.js",
        chunkFilename: "[id].bundle.js"
    },
    module: {
        loaders: [
            {
                test: path.resolve(__dirname, "..", "src"),
                loader: "babel-loader"
            }
        ]
    }
};
