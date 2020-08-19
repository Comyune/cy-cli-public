const sinon = require('sinon')
const Document = require('../../src/model/document')

const ONE_SECOND = 1000 // ms

const content = `# Document title
[[tag1] [tag2] [TAG3]]
[TODO: Add image here]
[TODO: Add Github link here]
Normal blog document here.\nAnd here.`

describe('Document', () => {
  let document
  beforeEach(() => document = new Document(content))

  describe('toJson', () => {
    it('returns a JSON object of the relevant attributes', () => {
      const json = document.toJson()
      expect(json).toMatchObject({ title: 'Document title' })
      expect(json).toMatchObject({ tags: ['tag1', 'tag2', 'tag3'] })
      expect(json).toMatchObject({ todos: ['Add image here', 'Add Github link here'] })
      expect(json).toMatchObject({ content: 'Normal blog document here.\nAnd here.' })
      expect(timeDifferenceFromNow(json.date)).toBeLessThan(ONE_SECOND)
    })
  })

  describe('title', () => {
    it('returns the first line that starts with #', () => {
      expect(document.title).toEqual('Document title')
    })
  })

  describe('tags', () => {
    it('returns the tags all lowercase', () => {
      expect(document.tags).toEqual(['tag1', 'tag2', 'tag3'])
    })
  })

  describe('todos', () => {
    it('lists out all the TODO tags', () => {
      expect(document.todos).toEqual([
        'Add image here',
        'Add Github link here',
      ])
    })
  })

  describe('content', () => {
    it('returns the rest of the document', () => {
      expect(document.content).toEqual(
        `Normal blog document here.\nAnd here.`
      )
    })
  })
})
