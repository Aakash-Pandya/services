
export const ALL_LABELS = [
  '🐪 dnd',
  '🎏 refactor',
  '📦 dep',
  '🔥 important',
  '🆗 small',
  '🦠 issue',
  '🎰 publish',
  '🏇 bump',
  '🐸 break',
  '🔪 deprecate',
  '💮 script',
  '🥑 typings',
  '🎳 lint',
  '💋 style',
  'examples',
  'build',
  'method',
  'docs',
  'prepublish',
  'usage',
]

export const ASK_FOR_TYPE = 'What is the type of the commit?'
export const ASK_FOR_MESSAGE = 'What is the message of the commit?'

export const USER_LABEL_INPUT = 'USER_LABEL_INPUT'
export const NO_LABEL = 'NO_LABEL'
export const CUSTOM_LABEL = 'CUSTOM_LABEL'

export const DOCS_KEY = 'DOCS'
export const FEATURE_KEY = 'FEATURE'
export const FIX_KEY = 'FIX'
export const SUPPORT_KEY = 'SUPPORT'
export const TEST_KEY = 'TEST'

export const FEATURE = {
  explanation: '💡   Add new feature',
  key: FEATURE_KEY,
  value: 'feat',
}

const TEST = {
  explanation: '🔍   Create unit or end-to-end test',
  key: TEST_KEY,
  value: 'test',
}

const FIX = {
  explanation: '🐛   Submit a bug fix',
  key: FIX_KEY,
  value: 'fix',
}

const SUPPORT = {
  explanation: '☂️   Chore',
  key: SUPPORT_KEY,
  value: 'chore',
}

const DOCS = {
  explanation: '✍   Edit documentation',
  key: DOCS_KEY,
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
