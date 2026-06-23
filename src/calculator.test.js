const { add, subtract, multiply, divide } = require('./calculator');

describe('Calculator', () => {
  test('add: 2 + 3 = 5', () => {
    expect(add(2, 3)).toBe(5);
  });

  test('add: negative numbers', () => {
    expect(add(-1, -4)).toBe(-5);
  });

  test('subtract: 10 - 4 = 6', () => {
    expect(subtract(10, 4)).toBe(6);
  });

  test('multiply: 3 * 4 = 12', () => {
    expect(multiply(3, 4)).toBe(12);
  });

  test('divide: 10 / 2 = 5', () => {
    expect(divide(10, 2)).toBe(5);
  });

  test('divide: throws on zero', () => {
    expect(() => divide(5, 0)).toThrow('Division by zero');
  });
});
