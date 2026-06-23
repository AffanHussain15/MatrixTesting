const { capitalize, reverseString, isPalindrome } = require('./stringUtils');

describe('String Utils', () => {
  test('capitalize: hello -> Hello', () => {
    expect(capitalize('hello')).toBe('Hello');
  });

  test('capitalize: empty string returns empty', () => {
    expect(capitalize('')).toBe('');
  });

  test('reverseString: abc -> cba', () => {
    expect(reverseString('abc')).toBe('cba');
  });

  test('isPalindrome: racecar is a palindrome', () => {
    expect(isPalindrome('racecar')).toBe(true);
  });

  test('isPalindrome: hello is not a palindrome', () => {
    expect(isPalindrome('hello')).toBe(false);
  });

  test('isPalindrome: A man a plan a canal Panama', () => {
    expect(isPalindrome('A man a plan a canal Panama')).toBe(true);
  });
});
