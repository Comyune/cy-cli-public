const DEFAULT_TAB_SIZE = 2

class Base {
  constructor(options = {}, services = {}) {
    this.options = { ...this.defaultOptions(), ...options }
    this.services = { ...this.defaultServices(), ...services }
  }

  // private

  defaultOptions () {
    return {
      input: '',
    }
  }

  defaultServices () {
    return {
      log: console.log,
      error: console.error,
      output: console.log,
    }
  }

  now() { return new Date() }
  todaysDate() { return this.now().toISOString() }
  prettyJson(input) { return JSON.stringify(input, null, DEFAULT_TAB_SIZE) }
  jsonOutput(input) { this.services.output(this.prettyJson(input)) }
}

module.exports = Base