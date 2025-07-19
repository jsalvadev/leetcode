class TreeNode100 {
  val: number
  left: TreeNode100 | null
  right: TreeNode100 | null
  constructor(val?: number, left?: TreeNode100 | null, right?: TreeNode100 | null) {
    this.val = (val === undefined ? 0 : val)
    this.left = (left === undefined ? null : left)
    this.right = (right === undefined ? null : right)
  }
}

function isSameTree(p: TreeNode100 | null, q: TreeNode100 | null): boolean {
  if (p === null && q === null) return true

  if (p !== null && q !== null) {
    return p.val === q.val
      && isSameTree(p?.left, q?.left)
      && isSameTree(p?.right, q?.right)
  }
  return false
};

// Input: p = [1,2,3], q = [1,2,3]
// Output: true

//     1
//    / \
//   2   3

const p = new TreeNode100(
  1,
  new TreeNode100(2),
  new TreeNode100(3),
)

const q = new TreeNode100(
  1,
  new TreeNode100(2),
  new TreeNode100(3),
)

console.log(isSameTree(p, q))

// Input: p = [1,2], q = [1,null,2]
// Output: false
//   p:   1
//       /
//      2

//   q:   1
//        \
//         2
const p2 = new TreeNode100(
  1,
  new TreeNode100(2),
  null,
)
const q2 = new TreeNode100(
  1,
  null,
  new TreeNode100(2),
)
console.log(isSameTree(p2, q2))
