class TreeNode101 {
  val: number
  left: TreeNode101 | null
  right: TreeNode101 | null
  constructor(val?: number, left?: TreeNode101 | null, right?: TreeNode101 | null) {
    this.val = (val === undefined ? 0 : val)
    this.left = (left === undefined ? null : left)
    this.right = (right === undefined ? null : right)
  }
}

function isSymmetric(root: TreeNode101 | null): boolean {
  if (!root) return true

  return isMirror(root?.left, root?.right)
}

function isMirror(partLeft: TreeNode101 | null, partRight: TreeNode101 | null): boolean {
  if (partLeft === null && partRight === null) return true

  if (partLeft !== null && partRight !== null) {
    return partLeft.val === partRight.val
      && isMirror(partLeft.left, partRight.right)
      && isMirror(partLeft.right, partRight.left)
  }

  return false
}

// function isEven(arr: number[]): boolean {
//   return arr.length % 2 === 0
// }

// Input: [1,2,2,3,4,4,3]
// Output: true
//        1
//      /   \
//     2     2
//    / \   / \
//   3  4  4  3

const root = new TreeNode101(
  1,
  new TreeNode101(
    2,
    new TreeNode101(3),
    new TreeNode101(4),
  ),
  new TreeNode101(
    2,
    new TreeNode101(4),
    new TreeNode101(3),
  ),
)

console.log(isSymmetric(root))

//       1
//     /   \
//    2     2
//   /     /
//  2     2

const rootSymmetric2 = new TreeNode101(
  1,
  new TreeNode101(
    2,
    new TreeNode101(2),
    null,
  ),
  new TreeNode101(
    2,
    new TreeNode101(2),
    null,
  ),
)

console.log(isSymmetric(rootSymmetric2))
