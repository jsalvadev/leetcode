function lengthOfLastWord(s: string): number {
  if (s.length === 1 && s[0] === ' ') return 0
  if (s.length === 1 && s[0] !== ' ') return 1

  s = s.trimEnd()

  let count = 0
  let i = s.length - 1
  while (i >= 0 && s[i] !== ' ') {
    count++
    i--
  }

  return count
}

// Input: s = 'Hello World'
// Output: 5

// Input: s = '   fly me   to   the moon  '
// Output: 4

console.log(lengthOfLastWord('Hello World'))
console.log(lengthOfLastWord('   fly me   to   the moon  '))
