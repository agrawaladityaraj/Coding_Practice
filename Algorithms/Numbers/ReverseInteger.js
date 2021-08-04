// Given a signed 32-bit integer x, return x with its digits reversed. If reversing x causes the value to go outside the signed 32-bit integer range [-231, 231 - 1], then return 0.

// Assume the environment does not allow you to store 64-bit integers (signed or unsigned).

// Example 1:

// Input: x = 123
// Output: 321

// Example 2:

// Input: x = -123
// Output: -321

// Example 3:

// Input: x = 120
// Output: 21

// Example 4:

// Input: x = 0
// Output: 0

// Constraints:

//     -231 <= x <= 231 - 1

var reverse = function (x) {
  let negative = x < 0;
  x = negative ? -1 * x : x;
  let y = x;
  let s = 0,
    d = 0;
  while (y !== 0) {
    d = y % 10;
    s = s * 10 + d;
    y = parseInt(y / 10);
  }
  let r = negative ? -1 * s : s;
  return r >= -2147483648 && r <= 2147483647 ? r : 0;
};

console.log(reverse(1534236469));
