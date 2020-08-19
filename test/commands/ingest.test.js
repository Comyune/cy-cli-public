const IngestCommand = require('../../src/commands/ingest')

describe('cy ingest', () => {
  it('runs', async () => {
    return IngestCommand.run(
      ['--inputFile', fixtureFilePath('strict-violation.md')]
    ).catch(console.error)
  })

  it('runs', async () => {
    return IngestCommand.run(
      ['--inputFile', fixtureFilePath('complicated.md')]
    ).catch(console.error)
  })
})