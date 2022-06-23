/* eslint-disable @typescript-eslint/no-var-requires */
const path = require('path')
const execa = require('execa')

const { templateName, templateFileName } = require('./config')

const TEMPLATE_DIR = path.join(__dirname, `../${templateFileName}`)

const shouldUseYarn = () => {
  try {
    execa.sync('yarnpkg', ['--version'])
    return true
  } catch (e) {
    return false
  }
}

const runner = shouldUseYarn() ? 'yarn' : 'npm'

const concurrentOpts = {
  restartTries: 3,
  prefix: '{time} {name} |',
  timestampFormat: 'HH:mm:ss',
}

module.exports = {
  templateName,
  templateFileName,
  concurrentOpts,
  runner,
  TEMPLATE_DIR,
}
