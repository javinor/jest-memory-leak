const NUM_OF_TEST_FILES = 1000
const fs = require('fs').promises
const path = require('path')

const template = `for (let i = 0; i < 100; i++) {
  test(\`tautology #\${i}\`, () => {
    expect(true).toBeTruthy()
  })
}`

const generateTests = async () => {
  return Promise.all(Array.from(Array(NUM_OF_TEST_FILES))
    .map((_, i) => path.join(__dirname, `dummy${i}.test.js`))
    .map(fname => fs.writeFile(fname, template))
  )
}

generateTests()