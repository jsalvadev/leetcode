class TreeNode108 {
  val: number
  left: TreeNode108 | null
  right: TreeNode108 | null
  constructor(val?: number, left?: TreeNode108 | null, right?: TreeNode108 | null) {
    this.val = (val === undefined ? 0 : val)
    this.left = (left === undefined ? null : left)
    this.right = (right === undefined ? null : right)
  }
}

function sortedArrayToBST(nums: number[]): TreeNode108 | null {
  if (!nums || nums.length === 0) return null

  const mid = Math.trunc(nums.length / 2)
  const root = new TreeNode108(nums[mid])

  const leftPart = nums.slice(0, mid)
  const rightPart = nums.slice(mid + 1)

  root.left = sortedArrayToBST(leftPart)
  root.right = sortedArrayToBST(rightPart)

  return root
};

// Input: nums = [-10,-3,0,5,9]
// Output: [0,-3,9,-10,null,5]

//        0
//       / \
//     -3   9
//    /   /
//  -10  5

console.log(sortedArrayToBST([-10, -3, 0, 5, 9]))
