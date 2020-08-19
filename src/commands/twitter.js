const {flags} = require('@oclif/command')
const Base = require('./base')
const TwitterService = require('../services/twitter')
const Document = require('../model/document')

class TwitterCommand extends Base {
  async run(){
    try {
      const twitterService = await this.buildTwitterService()
      const input = await this.getInput(this.flags.inputFile)
      const document = new Document(input)
      await twitterService.post(document.content)
    } catch (error) { throw error }
  }

  // private

  async buildTwitterService() {
    const { inputFile } = this.flags

    const options = {
      credentials: this.configuration.twitterCredentials,
    }

    const services = {
      output: this.output,
      outputJson: this.outputJson,
    }

    return new TwitterService(options, services)
  }

  get flags() {
    const {flags} = this.parse(TwitterCommand)
    return flags
  }
}

TwitterCommand.description = `Takes a document and tweets its contents
...

EXAMPLE:
cat my-doc.md | cy ingest | cy twitter
`

TwitterCommand.flags = {
  strict: flags.string({ char: 's', description: 'enable strict mode' }),
  inputFile: flags.string({ description: 'Path to input file (acts like STDIN)' }),
}

module.exports = TwitterCommand