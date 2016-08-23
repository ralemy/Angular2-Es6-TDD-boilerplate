"use strict";
const path = require("path");

console.log(path.resolve(__dirname,"..","src","js","boot.js"));

module.exports = {
	entry: path.resolve(__dirname,"..","src","js","boot.js"),
	output: {
		path: path.resolve(__dirname,".."),
		filename: "bundle.js"
	},
	module:{
		loaders:[
			{test: path.resolve(__dirname,"..","src"),
			loader:"babel-loader"
			}
		]
	}
};
