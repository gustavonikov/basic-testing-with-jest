// Some functions to serve as a basis for our tests.

/**
 * Simulates a very basic search like google.
 *
 * @param   {string}  searchInput 
 * @param   {string[]}  database   
 *
 * @return  {string[]} The "top 3" results of the search.             
 */
const googleSearch = (searchInput, database) => {
  const matches = database
    .filter(website => website.includes(searchInput))

  return matches.length > 3 ? matches.slice(0, 3) : matches
}

/**
 * Calculates the average of numbers.
 *
 * @param   {number[]}  numbers 
 *
 * @return  {number} The average.
 */
const getAverage = (numbers) => {
  if (!(Array.isArray(numbers)) || numbers.length < 2) {
    throw new Error('Invalid input, must be an array containing at least two numbers.')
  }

  const isAllElementsNumbers = numbers.every(number => typeof number === 'number')

  if (!isAllElementsNumbers) {
    console.error('All incoming numbers must be of type number.')

    return
  }

  const sum = numbers
    .reduce((previousNumber, currentNumber) => previousNumber + currentNumber)

  const average = sum/numbers.length
  const isAnInteger = /^\d+$/

  return isAnInteger.test(average) ? average : parseFloat(average.toFixed(2))
}

module.exports = { 
  googleSearch, 
  getAverage
}
