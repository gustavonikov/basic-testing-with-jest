const swapi = require('./swapi')

// Replaces the module 'swapi' for the mock that we created in __mocks__ directory.
jest.mock('./swapi')

/* Let's repeat the tests that we did on the previous, but now with the mock that we made. 
  Pay attention on how much time was spent to run the tests with mock and without it.
*/
describe('getStarWarsCharacters', () => {
  test('if will get characters info from star wars api', async () => {
    expect.assertions(2)
    const charactersData = await swapi.getStarWarsCharacters()
    expect(charactersData).toHaveProperty('count')
    expect(charactersData).toHaveProperty('results')
  })

  it('calls star wars API to get characters and verify info types', (done) => {
    expect.assertions(2)

    swapi.getStarWarsCharacters().then(data => {
      expect(typeof data.count).toEqual('number')
      expect(Array.isArray(data.results)).toBeTruthy()
      done()
    })
  })
  
  it('calls stars wars API to get characters and verify characters count', () => {
    expect.assertions(2)

    return swapi.getStarWarsCharacters().then(data => {
      expect(data.count).toEqual(82)
      expect(data.count).toBeGreaterThan(80)
    })
  })
})
