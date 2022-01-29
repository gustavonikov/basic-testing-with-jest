const swapi = require('./swapi')

// You can set the max time for your tests to run, default is 5 seconds.
jest.setTimeout(9000)

/* 
  A Glossary to help you understand better:
  "expect.assertions(number)": verifies that a certain number of assertions are 
  called during a test. This is often useful when testing asynchronous code, 
  in order to make sure that assertions in a callback actually got called.
*/
describe('getStarWarsCharacters', () => {
  // Using async/await to deal with asynchronous test.
  test('if will get characters info from star wars api', async () => {
    expect.assertions(2)
    const charactersData = await swapi.getStarWarsCharacters()
    expect(charactersData).toHaveProperty('count')
    expect(charactersData).toHaveProperty('results')
  })

  it('calls star wars API to get characters and verify info types', (done) => {
    expect.assertions(2)
    /* First way to get your test working with promises is using "done".
      Will wait until the promise is executed and run the test, to finish. */
    swapi.getStarWarsCharacters().then(data => {
      expect(typeof data.count).toEqual('number')
      expect(Array.isArray(data.results)).toBeTruthy()
      done()
    })
  })
  
  it('calls stars wars API to get characters and verify characters count', () => {
    expect.assertions(2)
    // Second way to do it is returning the promise, so it will wait until its finished.
    return swapi.getStarWarsCharacters().then(data => {
      expect(data.count).toEqual(82)
      expect(data.count).toBeGreaterThan(80)
    })
  })

  /* But if I tell you that how we did above it's not a good way to test api calls? 
  See, it takes too much time to make each one of this call, imagine many of them...
  would take too long to finish the tests. And how should we do it? Using mocks! :D */
})
