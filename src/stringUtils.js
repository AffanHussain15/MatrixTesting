function capitalize(str) {
  if (!str) return '';
  return str.charAt(0).toUpperCase() + str.slice(1).toLowerCase();
}

function reverseString(str) {
  return str.split('').reverse().join('');
}

function isPalindrome(str) {
  const clean = str.toLowerCase().replace(/[^a-z0-9]/g, '');
  return clean === reverseString(clean);
}

module.exports = { capitalize, reverseString, isPalindrome };
