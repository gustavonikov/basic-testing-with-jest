// Now a little bit more realistic examples. To this second example we gonna divide in 3 test files.
const fetch = require('node-fetch')

/**
 * @typedef Character
 * @property {string} name
 * @property {string} height
 * @property {string} mass
 * @property {string} hair_color
 * @property {string} eye_color
 * @property {string} birth_year
 * @property {string} gender
 * @property {string} homeworld
 * @property {string[]} films
 * @property {string[]} species
 * @property {string[]} vehicles
 * @property {string[]} starships
 * @property {string} created
 * @property {string} edited
 * @property {string} url
 */

/**
 * @typedef CharactersData
 * @property {number} count
 * @property {Character[]} results
 */

/**
 * Get all Stars Wars characters from "swapi" API.
 *
 * @return  {Promise<CharactersData>} 
 */
const getStarWarsCharacters = async () => {
  try {
    const charactersData = await fetch('https://swapi.dev/api/people')
    const { count, results } = await charactersData.json()

    return {
      count,
      results
    }
  } catch (_) {
    throw new Error(
      'Os personagens foram consumidos pela Força e não conseguimos encontrá-los no momento.'
    )
  }
}

/**
 * Get a Star Wars character by name.
 *
 * @param   {string}  characterName  - E.g: 'Luke' or 'Luke Skywalker'.
 *
 * @return  {Promise<Character>}            
 */
const getStarWarsCharacter = async (characterName) => {
  try {
    const { results: characters } = await getStarWarsCharacters()
    const character = characters.find(char => char.name.includes(characterName))

    if (!character) {
      console.log('Não foi possível achar um personagem com esse nome.')

      return {}
    }

    return character
  } catch (_) {
    console.error(
      'Oops, não foi possível fazer sua consulta agora, talvez os Sith dominaram o universo.'
    )
  }
}

module.exports = {
  getStarWarsCharacters,
  getStarWarsCharacter
}
