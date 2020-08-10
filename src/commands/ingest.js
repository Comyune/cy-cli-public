const {Command, flags} = require('@oclif/command')

class IngestCommand extends Command {
  async run() {
    const {flags} = this.parse(IngestCommand)
    const name = flags.name || 'world'
    this.log(`hello ${name} from /Users/seb/Development/SeeWhy/cli/src/commands/ingest.js`)
  }
}

IngestCommand.description = `Describe the command here
...
Extra documentation goes here
`

IngestCommand.flags = {
  name: flags.string({char: 'n', description: 'name to print'}),
}

module.exports = IngestCommand
