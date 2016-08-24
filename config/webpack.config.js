"use strict";
import path from "path";
import HtmlPlugin from "html-webpack-plugin";
import config from "./config";

let packConfig = {
    entry: {
        app: path.resolve(config.js.target, config.js.rootFile)
    },
    output: {
        path: path.resolve("..", "dist"),
        publicPath: "/assets/",
        filename: "[name].bundle.js",
        chunkFilename: "[id].bundle.js"
    },
    plugins:[
        new HtmlPlugin()
    ],
    module: {
        loaders: [
            {
                test: path.resolve(__dirname, "..", "src"),
                loader: "babel-loader"
            },
            {
                test: /\.woff2?$|\.ttf$|\.eot$|\.svg$/,
                loader: "file"
            },
            {
                test: /\.scss$/,
                loaders: ["style", "css", "sass"]
            }
        ]
    }
};

export default packConfig
export function serverConfig(){
    let cfg = Object.create(packConfig);
    cfg.devtool = "eval";
    cfg.debug = true;
    return cfg;
}