class TreeNode {
  val: number
  left: TreeNode | null
  right: TreeNode | null
  constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
    this.val = (val === undefined ? 0 : val)
    this.left = (left === undefined ? null : left)
    this.right = (right === undefined ? null : right)
  }
}

function inorderTraversal(root: TreeNode | null): number[] {
  // base case
  if (root === null) return []

  const left = inorderTraversal(root.left)
  const current = [root.val]
  const right = inorderTraversal(root.right)

  return left.concat(current, right)
};

// Input: root = [1,null,2,3]
// Output: [1,3,2]

console.log(inorderTraversal(new TreeNode(1, null, new TreeNode(2, new TreeNode(3, null, null), null))))

// Input: root = [1,2,3,4,5,null,8,null,null,6,7,9]
// Output: [4,2,6,5,7,1,3,9,8]

//         1
//       /   \
//      2     3
//     / \     \
//    4   5     8
//       / \   /
//      6   7 9

const root2 = new TreeNode(
  1,
  new TreeNode(
    2,
    new TreeNode(4),
    new TreeNode(
      5,
      new TreeNode(6),
      new TreeNode(7),
    ),
  ),
  new TreeNode(
    3,
    null,
    new TreeNode(
      8,
      new TreeNode(9),
    ),
  ),
)

console.log(inorderTraversal(root2))
