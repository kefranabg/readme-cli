const askPatreonLink = require('./author-patreon')

describe('askPatreonLink', () => {
  it('should return correct question format', () => {
    const result = askPatreonLink()

    expect(result).toEqual({
      type: 'input',
      message: '👤  Patreon link (use empty value to skip)',
      name: 'authorPatreonLink'
    })
  })
})
