const {Command, flags} = require('@oclif/command')
const getStdin = require('../filesystem/std-in-reader')
const fsJetPack = require('fs-jetpack')
const DEFAULT_TAB_SIZE = 2

class IngestCommand extends Command {
  async run(){
    const {flags} = this.parse(IngestCommand)
    const input = await this.getInput(flags)
    const ingestedFile = this.ingest(input)
    this.jsonOutput(ingestedFile)
  }

  // private

  now() { return new Date() }
  todaysDate() { return this.now().toISOString() }

  ingest(markdownString) {
    return {
      title: null,
      content: markdownString,
      date: this.todaysDate(),
    }
  }

  jsonOutput(input) {
    this.log(
      JSON.stringify(input, null, DEFAULT_TAB_SIZE)
    )
  }

  async getInput(flags) {
    let input

    if(flags.stdin) {
      input = await fsJetPack.read(flags.stdin)
    } else {
      input = await getStdin.read()
    }

    return input
  }
}

IngestCommand.description = `Describe the command here
...
Extra documentation goes here
`

IngestCommand.flags = {
  strict: flags.string({char: 's', description: 'enable strict mode'}),
  stdin: flags.string({ description: 'Path to input file (acts like STDIN)' }),
}

module.exports = IngestCommand