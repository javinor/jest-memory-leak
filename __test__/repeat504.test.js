const _ = require("lodash")

_.times(500, i => {
  test(`tautology #${i}`, () => {
    expect(true).toBeTruthy()
  })
})
