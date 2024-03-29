const {Command} = require('@oclif/command')
const fsJetPack = require('fs-jetpack')
const getStdin = require('../filesystem/std-in-reader')

const DEFAULT_TAB_SIZE = 2

class Base extends Command {
  constructor(argv, config) {
    super(argv, config)
  }

  catch(error) {
    console.log("ERROR", error)
  }

  // private

  output(message) {
    this.log(message)
  }

  outputJson(object) {
    this.output(JSON.stringify(object, null, DEFAULT_TAB_SIZE))
  }

  async getInput(inputFile) {
    let contents
    if(inputFile) {
      contents = await fsJetPack.read(inputFile)
    } else {
      contents = await getStdin.read()
    }

    return contents
  }
}

module.exports = Base