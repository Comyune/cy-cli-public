const fsJetpack = require('fs-jetpack')


global.fixtureFilePath = (path) => `./test/fixtures/${path}`

global.fixtureFileReadAsync = (path) => {
  const fullPath = fixtureFilePath(path) 
  return fsJetpack.readAsync(fullPath)
}

global.timeDifferenceFromNow = (dateString) => {
  const date = Date.parse(dateString)
  return Math.abs(date - new Date().getTime())
}