const Base = require('./base')

class Ingest extends Base {
  constructor(options, services) {
    super(options, services)
  }

  async run() {
    const { input } = this.options 

    const result = {
      title:   null,
      content: input,
      date:    this.todaysDate(),
    }

    this.services.outputJson(result)
    return true
  }
}

module.exports = Ingest