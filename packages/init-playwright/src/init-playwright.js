const { attach: attachModule } = require('./attach')
const { headless: headlessModule } = require('./_modules/headless')
const { init } = require('./_modules/init')
const { type, pass } = require('rambdax')
const LONG_TIMEOUT = 60000
const SUPPORTED_WAIT_CONDITIONS = [ 'load', 'domcontentloaded', 'networkidle' ]

const defaultWaitCondition = {
  timeout   : LONG_TIMEOUT,
  waitUntil : 'networkidle',
}

const defaultURL = 'about:blank'
const defaultResolution = {
  x : 1366,
  y : 768,
}

const defaultInput = {
  headless      : true,
  logFlag       : false,
  resolution    : defaultResolution,
  url           : defaultURL,
  waitCondition : defaultWaitCondition,
}

function getWaitCondition(waitCondition){
  const typeIs = type(waitCondition)

  if (typeIs === 'Object'){
    const okCondition = pass({
      timeout   : Number,
      waitUntil : SUPPORTED_WAIT_CONDITIONS,
    })
    if (okCondition) return waitCondition

    return defaultWaitCondition
  }

  if (typeIs === 'String'){
    if (SUPPORTED_WAIT_CONDITIONS.includes(waitCondition)){
      return {
        waitUntil : waitCondition,
        timeout   : LONG_TIMEOUT,
      }
    }

    return defaultWaitCondition
  }

  if (typeIs !== 'Number') return defaultWaitCondition

  return {
    waitUntil : 'networkidle',
    timeout   : waitCondition,
  }
}

const logInfoMethod = input => {
  if (input._type !== 'log') return
  console.log(input)
}

async function initPlaywright(inputRaw){
  const headless = headlessModule() ? {} : { headless : false }

  const input = {
    ...defaultInput,
    ...inputRaw,
    ...headless,
  }
  const { browser, page } = await init(input, inputRaw.extraProps)

  const waitCondition = getWaitCondition(input.waitCondition)
  await page.goto(input.url, waitCondition)

  if (input.logAllFlag) page.on('console', input.logMethod)
  if (input.logFlag) page.on('console', logInfoMethod)
  if (input.logMethod) page.on('console', input.logMethod)

  return {
    browser,
    page,
  }
}

exports.initPlaywright = initPlaywright
exports.attach = attachModule
