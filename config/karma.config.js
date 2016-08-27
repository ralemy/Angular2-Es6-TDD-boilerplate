/**
 * Created by ralemy on 8/25/16.
 * Config file for karma tests
 */

import webpack from "webpack";
import config from "./config";

let packConfig = {
    entry: {},
    output: {},
    plugins:[
        new webpack.DefinePlugin({
            ENVIRONMENT: JSON.stringify('test')
        })
    ],
    module: {
        loaders: [
            {
                test: /\.js$/,
                exclude:/(node_modules|bower_components)/,
                loader: "babel",
                query:{
                    presets:["es2015", "angular2"]
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
    },
    devtool : 'inline-cheap-source-map'
};


module.exports = function (config) {
    config.set({
        basePath: '',
        frameworks: ['jasmine'],
        exclude:[],
        files: [
            {pattern: './karma.shim.js', watched: false}
        ],

        preprocessors: {
            "./karma.shim.js":["webpack"]
        },
        webpack: packConfig,

        webpackServer: {noInfo: true},

        port: 9876,

        colors: true,

        logLevel: config.LOG_INFO,

        browsers: ['PhantomJS'],

        concurrency: Infinity,

        autoWatch: false,
        singleRun: true

    });
};