class TreeNode104 {
  val: number
  left: TreeNode104 | null
  right: TreeNode104 | null
  constructor(val?: number, left?: TreeNode104 | null, right?: TreeNode104 | null) {
    this.val = (val === undefined ? 0 : val)
    this.left = (left === undefined ? null : left)
    this.right = (right === undefined ? null : right)
  }
}

function maxDepth(root: TreeNode104 | null): number {
  if (!root) return 0

  let deepLeft = 0
  let deepRight = 0

  deepLeft += maxDepth(root.left)
  deepRight += maxDepth(root.right)

  return 1 + Math.max(deepLeft, deepRight)
};

// Input: root = [3,9,20,null,null,15,7]
// Output: 3

//       3
//      / \
//     9   20
//        /  \
//       15   7

const root104 = new TreeNode104(3,
  new TreeNode104(9),
  new TreeNode104(20,
    new TreeNode104(15),
    new TreeNode104(7),
  ),
)

console.log(maxDepth(root104))
