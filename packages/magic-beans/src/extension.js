const vscode = require('vscode')
const { copyTrimmed } = require('./copyTrimmed')
const { createSpec } = require('./createSpec')
const { initBar } = require('./bar')
const { initWatcher } = require('./init')
const { orderProps } = require('./orderProps')
const { randomFile } = require('./randomFile')
const { formatJson } = require('./format-json')

function activate(context){
  console.log('START MAGIC BEANS')
  initBar()
  initWatcher()
  const formatJsonCommand = vscode.commands.registerCommand('magicBeans.formatJson',formatJson)
  const fEightCommand = vscode.commands.registerCommand('magicBeans.orderProps',
    orderProps)
  const altC = vscode.commands.registerCommand('magicBeans.copyTrimmed',
    copyTrimmed)
  const createSpecCommand = vscode.commands.registerCommand('magicBeans.createSpec',
    createSpec)
  const randomFileCommand = vscode.commands.registerCommand('magicBeans.randomFile',
    randomFile)

  context.subscriptions.push(altC)
  context.subscriptions.push(createSpecCommand)
  context.subscriptions.push(fEightCommand)
  context.subscriptions.push(randomFileCommand)
  context.subscriptions.push(formatJsonCommand)
}

exports.activate = activate
