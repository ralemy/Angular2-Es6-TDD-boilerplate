const path = require("path");
module.exports = {
	entry: path.resolve(__dirname,"..","src","boot.js"),
	output: {
		path: path.resolve(__dirname,".."),
		filename: "bundle.js"
	},
	module:{
		loaders:[
			{test: path.resolve(__dirname,"..","src"),
			loader:"babel"
		]
	}
};
