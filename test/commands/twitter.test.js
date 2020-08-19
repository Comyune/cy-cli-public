const TwitterCommand = require('../../src/commands/twitter')

const nock = require('nock')
nock.disableNetConnect()
const TWITTER_POST_MATCHER = /\/1.1\/statuses\/update.json\?status=.*/i

describe('cy twitter', () => {
  let scope
  beforeEach(() => {
    console.error = jest.fn()

    scope = nock('https://api.twitter.com').post(
      TWITTER_POST_MATCHER
    ).reply(201, '')
  })

  it('runs', async () => {
    await TwitterCommand.run(
      ['--inputFile', fixtureFilePath('strict-violation.md')]
    )

    expect(console.error).not.toHaveBeenCalled()
  })
})