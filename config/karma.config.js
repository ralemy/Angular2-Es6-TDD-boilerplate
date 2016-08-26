/**
 * Created by ralemy on 8/25/16.
 * Config file for karma tests
 */

import path from "path";
import webpackConfig from "./webpack.config"
import webpack from "webpack";

webpackConfig.plugins = [
    new webpack.DefinePlugin({
        ENVIRONMENT: JSON.stringify('test')
    })
];
webpackConfig.devtool = 'inline-cheap-source-map';

webpackConfig.entry = {};
webpackConfig.output={};

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
        webpack: webpackConfig,

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