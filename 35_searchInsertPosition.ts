function searchInsert(nums: number[], target: number): number {
  if (nums.includes(target)) return nums.indexOf(target)

  const idx = nums.findIndex(item => item > target)
  if (idx === -1) return nums.length

  return idx
}

// Input: (nums = [1, 3, 5, 6]), (target = 5)
// Output: 2

// Input: (nums = [1, 3, 5, 6]), (target = 2)
// Output: 1

// Input: (nums = [1, 3, 5, 6]), (target = 7)
// Output: 4

// console.log(searchInsert([1, 3, 5, 6], 5))
// console.log(searchInsert([1, 3, 5, 6], 2))
// console.log(searchInsert([1, 3, 5, 6], 7))
console.log(searchInsert([-1, 3, 5, 6], 0))
