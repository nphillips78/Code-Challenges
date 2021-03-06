/* Write a function called sumOfDigits. When given a positive integer, sumOfDigits returns the sum of its digits. Assume all numbers will be positive. 

For Example:
console.log(sumOfDigits(23));  // <--- 5
console.log(sumOfDigits(496)); // <--- 19

sumOfDigits(23) returns 5 because 2 + 3 = 5
sumOfDigits(496) returns 19 because 4 + 9 + 6 = 19
*/

function sumOfDigits(num) {
  let arr = String(num).split('') // create an array by splitting number 
  let sum = 0 // start here
  arr.forEach(digit => {
    sum += parseInt(digit) // for each index in the array sum is sum plus the next
  })
  return sum
}