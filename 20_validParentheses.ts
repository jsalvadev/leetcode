function isValid(s: string): boolean {
  if (s.length % 2 !== 0) return false

  const map = new Map()
  map.set(')', '(')
  map.set(']', '[')
  map.set('}', '{')

  let stack = [s[0]]
  for (let i = 1; i < s.length; i++) {
    if (s[i] === '(' || s[i] === '[' || s[i] === '{') {
      stack.push(s[i])
    } else if (stack[stack.length - 1] === map.get(s[i])) {
      stack.pop()
    } else {
      return false
    }
  }

  if (stack.length === 0) return true
  return false
}

// Input: s = '([])'
// Output: true

// console.log(isValid('([])'))
// console.log(isValid('()[]{}'))
// console.log(isValid('([)]'))
// console.log(isValid('(('))
console.log(isValid('([}}])'))
