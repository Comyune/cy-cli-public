const DEFAULT_ENCODING = 'utf-8'

const StdInReader = {
  read() {
    const stdin = process.openStdin()
    stdin.setEncoding(DEFAULT_ENCODING)
  
    return new Promise(resolve => {
      let data = ''
      stdin.on('data', chunk => data += chunk)
      stdin.on('end', () => resolve(data))
      if (stdin.isTTY) resolve('')
    })
  },
}

module.exports = StdInReader