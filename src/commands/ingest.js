const {flags} = require('@oclif/command')
const Base = require('./base')
const IngestService = require('../services/ingest')

class IngestCommand extends Base {
  async run(){
    const {flags} = this.parse(IngestCommand)
    const ingestService = await this.buildIngestService(flags)
    ingestService.run()
  }

  async buildIngestService({ inputFile }) {
    const options = {
      input: await this.getInput(inputFile),
    }

    const services = {
      output: this.output,
      outputJson: this.outputJson,
    }

    return new IngestService(options, services)
  }
}

IngestCommand.description = `Ingest a document into a generic JSON format
...
Only markdown currently supported.

EXAMPLE:
cat my-doc.md | cy ingest

> {
>   "title" : "My Doc",
>   "content" : "Content"
> }
`

IngestCommand.flags = {
  strict: flags.string({ char: 's', description: 'enable strict mode' }),
  inputFile: flags.string({ description: 'Path to input file (acts like STDIN)' }),
}

module.exports = IngestCommand