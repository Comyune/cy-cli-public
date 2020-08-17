const Ingest = require('../../src/services/ingest')
const ONE_SECOND = 1000 // ms

describe('Ingest service', () => {
  let services
  let outputJsonMock
  beforeEach(() => {
    outputJsonMock = jest.fn()
    services = { ...services,
      outputJson: outputJsonMock,
    }
  })

  it('outputs an ingested JSON version of a simple file', async () => {
    const options = {
      input: await fixtureFileReadAsync('strict-violation.md'),
    }

    const service = new Ingest(options, services)
    const result = await service.run()
    expect(result).toEqual(true)

    const jsonOutput = firstJsonOutput(outputJsonMock)
    expect(jsonOutput.title).toEqual(null)
    expect(jsonOutput.content).toEqual('Content without a title.\n')
    expect(timeDifferenceFromNow(jsonOutput.date)).toBeLessThan(ONE_SECOND)
  })
})

function firstJsonOutput(mockFunction) {
  const firstOutputCall = mockFunction.mock.calls[0]
  const firstArgument = firstOutputCall[0]
  return firstArgument
}