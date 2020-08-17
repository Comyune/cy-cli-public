class OutputPrinter {
  constructor (callback = console.log) {
    this.callback = callback
  }

  print (message) {
    this.callback(message)
  }
}

module.exports = OutputPrinter