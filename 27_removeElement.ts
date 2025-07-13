function removeElement(nums: number[], val: number): number {
  if (nums.length === 0) return 0
  if (!nums.includes(val)) return nums.length

  nums.sort((a, b) => a - b)

  const first = nums.indexOf(val)
  const last = nums.lastIndexOf(val)

  nums.splice(first, last - first + 1)

  return nums.length
}

// Input: (nums = [3, 2, 2, 3]), (val = 3)
// Output: 2, (nums = [2, 2, _, _])

// Input: (nums = [0, 1, 2, 2, 3, 0, 4, 2]), (val = 2)
// Output: 5, (nums = [0, 1, 4, 0, 3, _, _, _])

// console.log(removeElement([3, 2, 2, 3], 3))
// console.log(removeElement([0, 1, 2, 2, 3, 0, 4, 2], 2))
console.log(removeElement([2], 3))
console.log(removeElement([2, 2, 2], 0))
