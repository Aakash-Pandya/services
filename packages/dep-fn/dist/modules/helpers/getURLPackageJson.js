"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const rambdax_1 = require("rambdax");
exports.getURLPackageJson = rambdax_1.compose(x => `https://raw.githubusercontent.com/${x}/master/package.json`, rambdax_1.replace('https://github.com/', ''));
