function removeDuplicates(nums: number[]): number {
  if (nums.length === 0) return 0

  let max = nums[0]
  let unique = nums.length
  for (let i = 1; i < nums.length; i++) {
    if (nums[i] === max) {
      nums[i] = 101
      unique--
    } else {
      max = nums[i]
    }
  }

  nums.sort((a, b) => a - b)
  return unique
}

// Input: nums = [1, 1, 2]
// Output: 2, (nums = [1, 2, _])

// Input: nums = [0, 0, 1, 1, 1, 2, 2, 3, 3, 4]
// Output: 5, (nums = [0, 1, 2, 3, 4, _, _, _, _, _])

console.log(removeDuplicates([1, 1, 2]))
console.log(removeDuplicates([0, 0, 1, 1, 1, 2, 2, 3, 3, 4]))
