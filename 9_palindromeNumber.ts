function isPalindrome(x: number): boolean | undefined {
  if (x < 0) return false
  if (0 <= x && x <= 9) return true

  const digits = []
  while (x > 0) {
    const digit = x % 10
    digits.unshift(digit)
    x = Math.trunc(x / 10)
  }

  for (let i = 0; i < digits.length; i++) {
    for (let j = digits.length - i - 1; j >= digits.length / 2; j--) {
      if (digits[i] !== digits[j]) return false
      if (i === j) return true
      break
    }
  }

  return true
}

// Input: x = 121
// Output: true

// Input: x = -121
// Output: false

console.log(isPalindrome(121))
console.log(isPalindrome(-121))
console.log(isPalindrome(11))
