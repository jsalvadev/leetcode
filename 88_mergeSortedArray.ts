/**
 Do not return anything, modify nums1 in-place instead.
 */
function merge(nums1: number[], m: number, nums2: number[], n: number): void {
  if (nums1.length > m) {
    nums1.splice(m)
  }

  for (const item of nums2) {
    nums1.push(item)
  }

  nums1.sort((a, b) => a - b)
};

// Input: nums1 = [1,2,3,0,0,0], m = 3, nums2 = [2,5,6], n = 3
// Output: [1,2,2,3,5,6]

// Input: nums1 = [0], m = 0, nums2 = [1], n = 1
// Output: [1]

merge([1, 2, 3, 0, 0, 0], 3, [2, 5, 6], 3)
// merge([0], 0, [1], 1)
// merge([4, 0, 0, 0, 0, 0], 1, [1, 2, 3, 5, 6], 5)
