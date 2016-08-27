"use strict";
import path from "path";
import webpack from "webpack";
import HtmlPlugin from "html-webpack-plugin";
import config from "./config";

let packConfig = {
    entry: {
        app: path.resolve(config.js.rootFile)
    },
    output: {
        path: config.build.path,
        publicPath: "/assets/",
        filename: "[name].bundle.js",
        chunkFilename: "[id].bundle.js"
    },
    plugins: [
        new HtmlPlugin({
            template: config.js.rootPage
        })
    ],
    module: {
        loaders: [
            {
                test: /\.js$/,
                exclude: /(node_modules|bower_components)/,
                loader: "babel",
                query: {
                    presets: ["es2015", "angular2"]
                }
            },
            {
                test: /\.woff2?$|\.ttf$|\.eot$|\.svg$/,
                loader: "file"
            },
            {
                test: /\.scss$/,
                loaders: ["style", "css", "sass"]
            },
            {
                test: /\.pug$/,
                loader: 'pug-html-loader'
            },
        ]
    }
};

export default packConfig
export function serverConfig() {
    let cfg = Object.create(packConfig);
    cfg.devtool = "eval";
    cfg.debug = true;
    return cfg;
}

export function testConfig() {
    let cfg = Object.create(packConfig);
    cfg.plugins = [
        new webpack.DefinePlugin({
            ENVIRONMENT: JSON.stringify('test')
        })
    ];
    cfg.devtool = 'inline-cheap-source-map';

    cfg.entry = {};
    cfg.output = {};
    return cfg;
}