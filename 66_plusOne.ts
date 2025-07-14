function plusOne(digits: number[]): number[] {
  let d = (BigInt(digits.join('')) + 1n).toString().split('')

  const result = d.map(Number)
  return result
}

// Input: digits = [1, 2, 3]
// Output: [1, 2, 4]

// Input: digits = [6,1,4,5,3,9,0,1,9,5,1,8,6,7,0,5,5,4,3]
// Output: [6,1,4,5,3,9,0,1,9,5,1,8,6,7,0,5,5,4,4]

console.log(plusOne([1, 2, 3]))
console.log(plusOne([6, 1, 4, 5, 3, 9, 0, 1, 9, 5, 1, 8, 6, 7, 0, 5, 5, 4, 3]))
