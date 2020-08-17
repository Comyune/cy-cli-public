const IngestCommand = require('../../src/commands/ingest')

describe('cy ingest', () => {
  it('runs', () => {
    return IngestCommand.run(
      ['--inputFile', fixtureFilePath('strict-violation.md')]
    )
  })
})