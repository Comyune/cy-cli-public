const TwitterService = require('../../src/services/twitter')

const nock = require('nock')
nock.disableNetConnect()

const scope = nock('https://api.twitter.com').post(
  '/1.1/statuses/update.json?status=Test'
).reply(201, '')

const credentials = {
  consumer_key: 'DUMMY_CONSUMER_KEY',
  consumer_secret: 'DUMMY_CONSUMER_SECRET',
  access_token: 'DUMMY_ACCESS_TOKEN',
  access_token_secret: 'DUMMY_ACCESS_TOKEN_SECRET'
}

describe('Twitter service', () => {
  let twitter

  beforeEach(() => {
    const options = { credentials }
    const services = {}
    twitter = new TwitterService(options, services)
  })

  it('posts a status to Twitter', async () => {
    await twitter.post('Test')
  })
})