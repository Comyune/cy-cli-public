const compact = require('lodash/compact')

const H1_MATCHER = new RegExp('^# .*')
const H1_OFFSET = 2 // H1 content starts at position 2 on the line

const TAG_MATCHER = /^\[\[.*\]\]$/i
const TAG_SEPARATOR = '] ['

const TODO_LINE_MATCHER = /^\[TODO: (.*)\]$/i
const NEW_LINE_CHARACTER = "\n"

class Document {
  constructor(text) {
    if(!text) throw new Error('Can not create a Document without text.')
    this.text = text
  }

  toJson() {
    const { title, content, tags, todos, date } = this
    return { title, content, tags, todos, date }
  }

  // Attributes

  get title() {
    const value = this.firstH1Line.substring(H1_OFFSET)
    return value.length < 1 ? null : value 
  }

  get content() {
    return this.lines.filter(line => {
      return !(
        TODO_LINE_MATCHER.test(line)
        || TAG_MATCHER.test(line)
        || H1_MATCHER.test(line)
      )
    }).join(
      NEW_LINE_CHARACTER
    )
  }

  get tags() {
    return this.firstTagsLine.split(
      TAG_SEPARATOR
    ).map(
      this.removeSquareBraces
    ).map(
      dirtyTag => dirtyTag.toLowerCase()
    )
  }

  get todos() {
    return compact(this.lines.map(line => {
      const matches = TODO_LINE_MATCHER.exec(line)
      if(!matches) return
      return matches[1]
    }))
  }

  get date() {
    return new Date().toISOString()
  }

  // private

  removeSquareBraces(string) {
    return string.replace(/\[/g, '').replace(/\]/g, '')
  }

  get firstH1Line() {
    return this.lines.find(line => H1_MATCHER.test(line)) || ''
  }

  get firstTagsLine() {
    return this.lines.find(line => TAG_MATCHER.test(line)) || ''
  }

  get lines() {
    return this.text.split(NEW_LINE_CHARACTER)
  }
}

module.exports = Document
