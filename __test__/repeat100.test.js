const {NUM_OF_TESTS_PER_FILE} = require('./consts')

for (let i = 0; i < NUM_OF_TESTS_PER_FILE; i++) {
  test(`tautology #${i}`, () => {
    expect(true).toBeTruthy()
  })
}
