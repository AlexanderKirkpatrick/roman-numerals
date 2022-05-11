import convertToRoman from './../src/numeral.js'

describe('convertToRoman', () => {

  test('should correctly return a numeral', () => {
    const numeral = new convertToRoman(7);
    expect(numeral).toEqual(VII)
  });
});