const getStarWarsCharacters = jest.fn().mockImplementation(() => {
  return Promise.resolve({
    count: 82,
    results: [{}]
  })
})

module.exports = {
  getStarWarsCharacters
}
