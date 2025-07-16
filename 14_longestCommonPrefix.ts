function longestCommonPrefix(strs: string[]): string {
  if (strs.length === 0) return ''
  if (strs.length === 1) return strs[0]

  const first = strs[0]
  let output = ''

  for (let i = 0; i < first.length; i++) {
    const allMatch = strs.every(item => first[i] === item[i])
    if (allMatch) {
      output += first[i]
    }
    else {
      return output
    }
  }

  return output
}

// Input: strs = ["flower","flow","flight"]
// Output: "fl"

console.log(longestCommonPrefix(['flower', 'flow', 'flight']))
// longestCommonPrefix(['dog', 'racecar', 'car'])
