const myTest = require('./script.js');
const stringLength = myTest.stringLength;
const reverseString = myTest.reverseString;
const add = myTest.add;
const subtract = myTest.subtract;
const multiply = myTest.multiply;
const divide = myTest.divide;
const capitalizeString = myTest.capitalizeString;

describe (('my string'), () => {
  test('world length is equal (5)', () => {
    expect(stringLength('world')).toBe(5);
  });
  test('string length should not be more than 10', () => {
    expect(stringLength('hello microverse world')).toBe('string length must not exceed 10 characters');
  });
  test('string must not empty', () => {  
    expect(stringLength('')).toBe('empty string');
  });
  test('world reverse (dlrow)', () => {  
    expect(reverseString('world')).toBe('dlrow');
  });
  test('first letter is capital', () => {  
    expect(capitalizeString('world')).toBe('World');
  });

});

describe (('my calculator'), () => {
  test('5 + 5 equal (10)', () => {
    expect(add(5,5)).toBe(10);
  });
  test('10 - 1 equal (9)', () => {
    expect(subtract(10,1)).toBe(9);
  });
  test('5 X 3 equal (15)', () => {
    expect(multiply(5,3)).toBe(15);
  });
  test('15 / 3 equal (5)', () => {
    expect(divide(15,3)).toBe(5);
  });
});