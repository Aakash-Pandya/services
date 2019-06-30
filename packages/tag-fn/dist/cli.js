"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
process.on('unhandledRejection', (reason, promise) => {
    console.log(reason, promise);
});
process.on('uncaughtException', err => {
    console.log(err);
});
const inquirer = require("inquirer");
const log = require("log-fn");
const rambdax_1 = require("rambdax");
const index_1 = require("./index");
const init_1 = require("./modules/init");
const [input] = rambdax_1.drop(2, process.argv);
if (input === 'init') {
    inquirer
        .prompt([
        { type: 'input', message: 'Your Github username?', name: 'user' },
        { type: 'password', message: 'Your Github password?', name: 'password' },
    ])
        .then((credentials) => {
        init_1.init(credentials);
    });
}
else {
    const tag = input === undefined ?
        'minor' :
        input;
    if (['minor', 'major', 'patch'].includes(tag)) {
        log(`${tag} incrementation of the latest tag will be applied\n`, 'info');
    }
    else {
        log(`The new tag will be '${tag}'\n`, 'info');
    }
    log('spin');
    index_1.tagFn({ tag })
        .then(() => {
        log('stopspin');
    })
        .catch(console.log);
}
//# sourceMappingURL=cli.js.map