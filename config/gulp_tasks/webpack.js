"use strict";

import webpack from "webpack";
import webpackConfig from "../webpack.config";
import gutil from "gulp-util";

export default function(){
    return (cb) => {
        webpack(webpackConfig, function(err, stats) {
            if (err) throw new gutil.PluginError('webpack', err);
            gutil.log('[webpack]', stats.toString({
                colors: true,
                progress: true
            }));
            cb();
        });
    }
}