const { googleSearch, getAverage } = require('./script');

describe('googleSearch', () => {
  dbMock = [
    'dogs.com',
    'cheesepuff.com',
    'disney.com',
    'dogpictures.com',
  ] 

  it('is running', () => {
    expect(googleSearch('dog', dbMock)).toBeTruthy();
  })
  
  it('is working', () => {
    expect(googleSearch('dog', dbMock)).toEqual(['dogs.com', 'dogpictures.com'])
  })
  
  it('works with undefined and null input', () => {
    expect(googleSearch(undefined, dbMock)).toEqual([])
    expect(googleSearch(null, dbMock)).toEqual([])
  })
  
  it('does not return more than 3 matches', () => {
    const websites = googleSearch('.com', dbMock)
  
    expect(websites.length).toBe(3)
  })
})

describe('getAverage', () => {
  it('throws an error if that is not an array', () => {
    expect(() => getAverage(undefined)).toThrow(Error)
    expect(() => getAverage('20, 30')).toThrow(Error)
    // just to examplify that works with the message as well
    expect(() => getAverage([1]))
      .toThrow('Invalid input, must be an array containing at least two numbers.') 
    expect(() => getAverage(20))
      .toThrow('Invalid input, must be an array containing at least two numbers.')
  })

  it('does not calculate the average if all grades are not type number and returns undefined',
    () => {
      expect(getAverage([null, 8, []])).toBeUndefined()
    }
  )
  
  it('does not calculate the average if all grades are not type number and shows a console error',
    () => {
      const consoleSpy = jest
        .spyOn(console, 'error')
        .mockImplementation(() => {})

      getAverage([7, '2', 10]);
      expect(consoleSpy).toHaveBeenCalled();
    }
  )

  it('returns the average as a number', () => {
    expect(typeof getAverage([5, 5])).toBe('number')
    expect(typeof getAverage([5, 17, 9.6])).toBe('number')
    expect(typeof getAverage([5, 17, 10.5, 34])).toBe('number')
  })

  it('returns a float number with only two decimal places', () => {
    const hasTwoDecimalPlaces = /^\d+.\d{2}$/
    const average = getAverage([5, 17, 9.6])
  
    expect(hasTwoDecimalPlaces.test(average)).toBe(true)
  })

  it('calculates the average correctly', () => {
    expect(getAverage([5, 5, 5])).toEqual(5)
    expect(getAverage([5, 17, 9.6])).toBeCloseTo(10.53)
    expect(getAverage([10, 30, 50, 30])).toEqual(30)
    expect(getAverage([305, 17.98, 1000, 3])).toBeCloseTo(331.50)
  })
})
