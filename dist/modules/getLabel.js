"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const log_1 = require("log");
const constants_1 = require("../constants");
const promptSelect_1 = require("./promptSelect");
async function getLabel(commitType) {
    try {
        log_1.log(commitType.explanation, 'info');
        const promptOptions = {
            choices: constants_1.labels,
            question: constants_1.ASK_FOR_LABEL,
        };
        const label = await promptSelect_1.promptSelect(promptOptions);
        return label;
    }
    catch (err) {
        throw err;
    }
}
exports.getLabel = getLabel;
//# sourceMappingURL=getLabel.js.map