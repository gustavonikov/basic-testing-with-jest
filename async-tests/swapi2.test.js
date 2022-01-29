// Now with Mocking
const swapi = require('./swapi')

// Replaces the module 'swapi' for the mock that we created in __mocks__ directory.
jest.mock('./swapi')

/* Let's repeat the tests and dig deep a little more that we did on the previous file, 
  but now with the mock that we made. Pay attention on how much time was spent to run 
  the tests with mock and without it. */
describe('getStarWarsCharacters', () => {
  beforeEach(() => {
    expect.assertions(2)
  })

  test('if will get characters info from star wars api', async () => {
    const charactersData = await swapi.getStarWarsCharacters()
    expect(charactersData).toHaveProperty('count')
    expect(charactersData).toHaveProperty('results')
  })

  it('calls star wars API to get characters and verifies info types', (done) => {
    swapi.getStarWarsCharacters().then(data => {
      expect(typeof data.count).toEqual('number')
      expect(Array.isArray(data.results)).toBeTruthy()
      done()
    })
  })
  
  it('calls stars wars API to get characters and verifies characters count', () => {
    return swapi.getStarWarsCharacters().then(data => {
      expect(data.count).toEqual(82)
      expect(data.count).toBeGreaterThan(80)
    })
  })
})

describe('getStarWarsCharacter', () => {
  // We can use beforeEach to expect the assertions in each test instead writing to each one as before.
  beforeEach(() => {
    expect.hasAssertions()
  })

  test('if returns something', async () => {
    await swapi.getStarWarsCharacter('Luke')
    expect(swapi.getStarWarsCharacter).toHaveReturned()
  })

  describe('assert character infos', () => {
    let character = {}

    beforeEach(async () => {
      character = await swapi.getStarWarsCharacter('Luke')
    })

    it('returns the correct character', () => {
      expect(character.name).toEqual('Luke Skywalker')
    })
  
    it('returns the character birth year and height', () => {
      expect(character).toHaveProperty('birth_year')
      expect(character).toHaveProperty('height')
    })
  
    test('if gender and url properties types match with the ones that we expect', () => {
      expect(typeof character.gender).toBe('string')
      expect(Array.isArray(character.films)).toBe(true) // Same as toBeTruthy().
    })
  })

  it('returns an empty object if has no character with that name', async () => {
    expect(await swapi.getStarWarsCharacter('Leia')).toEqual({})
    expect(await swapi.getStarWarsCharacter()).toStrictEqual({})
    expect(await swapi.getStarWarsCharacter(null)).toStrictEqual({})
  })

  it('does not returns an empty object if passed [] or a empty string as param', async () => {
    /* This returns the character, but why? We built our "getStarWarsCharacter" function to verify if contains 
    that value in character's name. So, "Luke Skywalker" contains an empty string, and [] == '' in javascript xD. */
    expect(await swapi.getStarWarsCharacter([])).not.toEqual({}) 
    expect(await swapi.getStarWarsCharacter("")).not.toEqual({}) 
  })
})
