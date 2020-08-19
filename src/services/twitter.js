const Twit = require('twit')
const Base = require('./base')

const TIMEOUT = 1000 // ms
const STATUS_UPDATE_PATH = 'statuses/update'

class Twitter extends Base {
  constructor(options, services) {
    super(options, services)

    this.client = new Twit({
      ...options.credentials,
      timeout_ms: TIMEOUT,
      strictSSL: true
    })
  }

  post(status) {
    return this.client.post(
      STATUS_UPDATE_PATH, { status }
    )
  }
}

module.exports = Twitter