const IngestCommand = require('../../src/commands/ingest')
const ONE_SECOND = 1000 // ms

describe('cy ingest', () => {
  let stdOutLines = []

  beforeEach(() => {
    jest.spyOn(process.stdout, 'write').mockImplementation(value => {
      stdOutLines.push(value)
    })
  })

  afterEach(() => jest.restoreAllMocks())

  it('prints a ingested JSON version of the file', () => {
    return IngestCommand.run(
      ['--stdin', fixtureFilePath('strict-violation.md')]
    ).then(() => {
      const outputJson = JSON.parse(stdOutLines.join('\n'))

      expect(outputJson).toMatchObject({
        title: null, content: 'Content without a title.\n',
      })

      const timeDifference = timeDifferenceFromNow(Date.parse(outputJson.date))
      expect(timeDifference).toBeLessThan(ONE_SECOND)
    })
  })
})

// Helpers

function timeDifferenceFromNow(date) {
  return Math.abs(date - new Date().getTime())
}

function fixtureFilePath(path) { return `./test/fixtures/${path}` }