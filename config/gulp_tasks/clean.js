"use strict";
const del = require("del"),
      path = require("path"),
      config = require(path.resolve(__dirname,"..","config")).build;

module.exports = function(){
	return () => del([config.destination],{force:true})
}
