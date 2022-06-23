/* eslint-disable @typescript-eslint/no-var-requires */
const execa = require('execa')

const { templateName } = require('./config')

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
  concurrentOpts,
  runner,
}
