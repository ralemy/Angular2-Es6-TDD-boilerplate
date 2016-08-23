"use strict";
import del from "del";
import path from "path";
import config from "../config";

module.exports = function () {
    return () => del.sync(config.build.destination, {force: true})
};
