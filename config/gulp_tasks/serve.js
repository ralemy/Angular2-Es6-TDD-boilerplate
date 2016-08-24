"use strict";
import path from "path";
import webpack from "webpack";
import Server from "webpack-dev-server";
import gutil from "gulp-util";
import {serverConfig} from "../webpack.config";

export default function(){
    return () => {
        let cfg= serverConfig();
        let server = new Server(webpack(cfg),{
            contentBase: path.resolve(__dirname,"..","..","dist"),
            filename:"app.bundle.js",
            publicPath: "/assets/",
            stats: {
                colors: true
            }
        }).listen(8099,function(err){
            if(err) throw new gutil.PluginError('webpack-dev-server', err);
            console.log("listening on 8099",cfg,server);
        });
    }
}