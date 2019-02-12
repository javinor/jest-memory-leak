const jsdom = require('jsdom')
 
const FAKE_DOM_HTML = `
    <html>
    <body>
    </body>
    </html>
`
 
/*
 * First, we override Jasmine's describe method so that we can automatically add beforeAll and afterAll.
 * In the beforeAll and afterAll we asynchronously setup and tear down the jsdom instance.
 * This solves the synchronous window.close() issue with jsdom described here:
 *
 * https://github.com/tmpvar/jsdom/issues/1682#issuecomment-270310752
 *
 * Be aware, that if your project has "babel-polyfill" in its node_modules, you will have
 * problems with leaking windows. If you need polyfills for the building process, use the cloned version
 * that is renamed to something else than babel-polyfill.
 */
const desc = global.describe
global.describe = (title, test) => {
    /* We need to keep reference to the window to destroy the correct one afterwards.
     * Otherwise, some tests might fail. This is probably related to this fact here:
     * https://github.com/airbnb/enzyme/blob/master/docs/guides/jsdom.md#describewithdom-api-and-clearing-the-document-after-every-test
     */
    let testWindow = null
    desc(title, () => {
        beforeAll((done) => {
            // We wait until JSDom has finished building the window, before continuing with the tests.
            jsdom.env(FAKE_DOM_HTML, (err, window) => { // eslint-disable-line
                testWindow = window
                global.window = window
                done()
            })
        })
        afterAll((done) => {
            // After the test suite completes, we ASYNCHRONOUSLY delete the apropriate window, making sure it is released correctly.
            setImmediate(() => {
                if (testWindow) {
                    testWindow.close()
                }
                done()
            })
        })
        const testRunner = test.bind({})
        testRunner()
    })
}
global.describe.skip = desc.skip