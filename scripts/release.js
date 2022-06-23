/* eslint-disable @typescript-eslint/no-var-requires */
// eslint-disable-next-line import/no-extraneous-dependencies
const concurrently = require('concurrently')
const { runner, concurrentOpts } = require('./common')

const versionBump = []
const release = []

switch (process.argv[2]) {
  case 'patch':
    versionBump.push({
      name: 'bump-frontend',
      command: ` ${runner} version patch && git add package.json package-lock.json`,
      prefixColor: 'red',
    })
    release.push({
      name: 'release:patch',
      command:
        "changelog -p && git add CHANGELOG.md && git commit -m 'docs: updated CHANGELOG.md' && npm version patch && git push origin && git push origin --tags",
      prefixColor: 'yellow',
    })
    break
  case 'minor':
    versionBump.push({
      name: 'bump-frontend',
      command: ` ${runner} version minor && git add package.json package-lock.json`,
      prefixColor: 'red',
    })
    release.push({
      name: 'release:minor',
      command:
        "changelog -m && git add CHANGELOG.md && git commit -m 'docs: updated CHANGELOG.md' && npm version minor && git push origin && git push origin --tags",
      prefixColor: 'yellow',
    })
    break
  case 'major':
    versionBump.push({
      name: 'bump-frontend',
      command: ` ${runner} version major && git add package.json package-lock.json`,
      prefixColor: 'red',
    })
    release.push({
      name: 'release:major',
      command:
        "changelog -M && git add CHANGELOG.md && git commit -m 'docs: updated CHANGELOG.md' && npm version major && git push origin && git push origin --tags",
      prefixColor: 'yellow',
    })
    break
  default:
    break
}

const { result } = concurrently(versionBump, concurrentOpts)

result
  .then(() => concurrently(release, concurrentOpts))
  .catch((e) => {
    // eslint-disable-next-line no-console
    console.error(e.message)
  })
