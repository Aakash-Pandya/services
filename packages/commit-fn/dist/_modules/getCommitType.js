"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getCommitType = void 0;
const constants_1 = require("../constants");
const promptSelect_1 = require("./promptSelect");
async function getCommitType(typesOfCommit) {
    const typesOfCommitKeys = typesOfCommit.map(x => x.key);
    const promptOptions = {
        choices: typesOfCommitKeys,
        default: constants_1.FEATURE.key,
        question: constants_1.ASK_FOR_TYPE,
    };
    const typeOfCommitKey = await promptSelect_1.promptSelect(promptOptions);
    const [commit] = typesOfCommit.filter(x => x.key === typeOfCommitKey);
    return commit;
}
exports.getCommitType = getCommitType;
//# sourceMappingURL=getCommitType.js.map