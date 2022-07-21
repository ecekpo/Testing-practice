const myModule = require('./script.js');
const stringLength = myModule.stringLength;
const reverseString = myModule.reverseString;
const add = myModule.add;
const subtract = myModule.subtract;
const multiply = myModule.multiply;
const divide = myModule.divide;
const capitalizeString = myModule.capitalizeString;

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
  test('2 + 1 equal (3)', () => {
    expect(add(2,1)).toBe(3);
  });
  test('2 - 1 equal (1)', () => {
    expect(subtract(2,1)).toBe(1);
  });
  test('2 X 3 equal (6)', () => {
    expect(multiply(2,3)).toBe(6);
  });
  test('8 / 4 equal (2)', () => {
    expect(divide(8,4)).toBe(2);
  });
});