const _ = require("lodash")

_.times(50, i => {
  test(`tautology #${i}`, () => {
    expect(true).toBeTruthy()
  })
})
