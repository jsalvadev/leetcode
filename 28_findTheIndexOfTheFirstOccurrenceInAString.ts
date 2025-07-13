function strStr(haystack: string, needle: string): number {
  if (!haystack.includes(needle)) {
    return -1
  }

  return haystack.indexOf(needle)
}

// Input: (haystack = 'sadbutsad'), (needle = 'sad')
// Output: 0

console.log(strStr('sadbutsad', 'sad'))
