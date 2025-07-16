function romanToInt(s: string): number {
  const roman = new Map()

  roman.set('I', 1)
  roman.set('V', 5)
  roman.set('X', 10)
  roman.set('L', 50)
  roman.set('C', 100)
  roman.set('D', 500)
  roman.set('M', 1000)

  let num = roman.get(s[s.length - 1])
  for (let curr = s.length - 2; curr >= 0; curr--) {
    const prev = curr + 1

    if (roman.get(s[curr]) >= roman.get(s[prev])) {
      num += roman.get(s[curr])
    }
    else {
      num -= roman.get(s[curr])
    }
  }
  return num
}

// Symbol       Value
// I             1
// V             5
// X             10
// L             50
// C             100
// D             500
// M             1000

// Input: s = 'LVIII'
// Output: 58
// Explanation: (L = 50),

// console.log(romanToInt('LVIII'))
console.log(romanToInt('MCMXCIV')) // 1994

//  M   C   M   X   C   I   V
// [0] [1] [2] [3] [4] [5] [6]
// Size 7
