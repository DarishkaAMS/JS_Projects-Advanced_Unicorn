// Given a signed 32-bit integer x, return x with its digits reversed.
// If reversing x causes the value to go outside the signed 32-bit integer range [-231, 231 - 1],
// then return 0.

// Example 1
// Input: x = 123
// Output: 321

// Example 2
// Input: x = -123
// Output: -321

// Example 2
// Input: x = 1534236469
// Output = 0

function main(x) {
  console.log(Number.isSafeInteger(x));

  const revercedNum = parseFloat(
    x
      .toString()
      .split('')
      .reverse()
      .join('')
  ) * Math.sign(x)

  if (revercedNum >= 0x7fffffff || revercedNum <= -0x7fffffff){
    return 0;  
  } else {
    console.log(revercedNum);
    return revercedNum;
  }
}

module.exports = main;