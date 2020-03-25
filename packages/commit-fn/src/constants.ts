import {getCustomLabels} from './_modules/getCustomLabels'
import {CommitType, Label} from './typings'

import {constantCase} from 'string-fn'

export const ASK_FOR_TYPE = 'What is the type of the commit?'
export const ASK_FOR_LABEL = 'Select label'
export const ASK_FOR_CUSTOM_LABEL = 'Write your label'
export const ASK_FOR_MESSAGE = 'What is the message of the commit?'

export const FEATURE = {
  explanation: '💡   Add new feature',
  key: 'FEATURE',
  value: 'feat',
}

const TEST = {
  explanation: '🔍   Create unit or end-to-end test',
  key: 'TEST',
  value: 'test',
}

const FIX = {
  explanation: '🐛   Submit a bug fix',
  key: 'FIX',
  value: 'fix',
}

const SUPPORT = {
  explanation: '☂️   Chore',
  key: 'SUPPORT',
  value: 'chore',
}

const DOCS = {
  explanation: '✍   Edit documentation',
  key: 'DOCS',
  value: 'docs',
}

export const typesOfCommit: CommitType[] = [
  FEATURE,
  FIX,
  TEST,
  SUPPORT,
  DOCS,
]

export const explanationOfTypes: string[] = [
  `${FEATURE.key} - ${FEATURE.explanation}`,
  `${FIX.key} - ${FIX.explanation}`,
  `${SUPPORT.key} - ${SUPPORT.explanation}`,
  `${TEST.key} - ${TEST.explanation}`,
  `${DOCS.key} - ${DOCS.explanation}`,
]

export const EMPTY_LABEL = {
  belongsTo: typesOfCommit,
  explanation: 'No label',
  value: '',
}

export const CUSTOM_LABEL = {
  belongsTo: typesOfCommit,
  explanation: 'Write your own label',
  value: 'custom',
}

const TYPINGS_LABEL = {
  belongsTo: [FEATURE, FIX],
  explanation: '📚️ ️Edit Typescript definitions',
  value: 'typings',
}

const STYLE_LABEL = {
  belongsTo: [FIX, FEATURE],
  explanation: '💋  CSS/LESS related changes',
  value: 'style',
}

const ISSUE_LABEL = {
  belongsTo: [FIX],
  explanation: '🚮  Close issue',
  value: 'issue',
}

const IMPORTANT_LABEL = {
  belongsTo: [FIX, FEATURE, TEST, SUPPORT],
  explanation: '⚠  Commit with higher significance',
  value: 'important',
}

const SMALL_LABEL = {
  belongsTo: [FEATURE, TEST, DOCS, SUPPORT],
  explanation: '🆗  Small change',
  value: 'small',
}

const DEPENDENCY_LABEL = {
  belongsTo: [SUPPORT],
  explanation: '📦  Change of dependency',
  value: 'dep',
}

const BUMP_LABEL = {
  belongsTo: [SUPPORT],
  explanation: '🏗  Publish new version of library',
  value: 'bump',
}

const BREAK_LABEL = {
  belongsTo: [FEATURE],
  explanation: '💣  Breaking changes',
  value: 'break',
}

const EXAMPLES_LABEL = {
  belongsTo: [DOCS],
  explanation: '📝  Update examples in documentation',
  value: 'examples',
}

const PUBLISH_LABEL = {
  belongsTo: [SUPPORT],
  explanation: '📨  Publish new version',
  value: 'publish',
}

const USAGE_LABEL = {
  belongsTo: [DOCS],
  explanation: 'ℹ️  Edit usage information',
  value: 'usage',
}

const REMOVE_LABEL = {
  belongsTo: [FEATURE, TEST, DOCS],
  explanation: '🔪  Remove feature or test',
  value: 'cut',
}

export const START_LABEL = {
  belongsTo: [FEATURE, SUPPORT, FIX],
  explanation: '▶️  Start',
  value: 'start',
}

export const PROGRESS_LABEL = {
  belongsTo: [FEATURE, SUPPORT, FIX],
  explanation: '🐌  Continue developing',
  value: 'progress',
}

export const STOP_LABEL = {
  belongsTo: [FEATURE, SUPPORT, FIX],
  explanation: '⏹  Stop',
  value: 'stop',
}

const customLabelsRaw = getCustomLabels()
const customLabels: Label[] = []

const getBelongsTo = (key): CommitType[] => {
  let commitTypeHolder: CommitType | undefined

  typesOfCommit.forEach(singleCommitType => {
    if (singleCommitType.key.toLowerCase() === key) {
      commitTypeHolder = singleCommitType
    }
  })
  if (!commitTypeHolder) return []
  return [commitTypeHolder]
}

if (customLabelsRaw !== false) {
  const belongsToWhenLabel: CommitType[] = [FEATURE, FIX, TEST]

  Object.keys(customLabelsRaw).forEach(key => {
    if (key === 'workInProgress') {
      return
    }

    customLabelsRaw[key].forEach(singleLabel => {
      const belongsToValue =
        key === 'labels' ? belongsToWhenLabel : getBelongsTo(key)

      const x: Label = {
        belongsTo: belongsToValue,
        explanation: `🔧  ${constantCase(singleLabel)}`,
        value: singleLabel,
      }

      customLabels.push(x)
    })
  })
}

export const labels: Label[] = [
  EMPTY_LABEL,
  DEPENDENCY_LABEL,
  SMALL_LABEL,
  IMPORTANT_LABEL,
  ...customLabels,
  START_LABEL,
  PROGRESS_LABEL,
  STOP_LABEL,
  BUMP_LABEL,
  BREAK_LABEL,
  TYPINGS_LABEL,
  STYLE_LABEL,
  PUBLISH_LABEL,
  ISSUE_LABEL,
  EXAMPLES_LABEL,
  USAGE_LABEL,
  REMOVE_LABEL,
  CUSTOM_LABEL,
]
