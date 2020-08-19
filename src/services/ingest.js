const Base = require('./base')
const Document = require('../model/document')

class Ingest extends Base {
  constructor(options, services) {
    super(options, services)
  }

  async run() {
    const { input } = this.options 
    const document = new Document(input)
    this.services.outputJson(document.toJson())
    return true
  }
}

module.exports = Ingest