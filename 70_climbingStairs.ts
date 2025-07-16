function climbStairs(n: number): number {
  const memo = new Map<number, number>()

  function helper(k: number): number {
    // case base
    if (k <= 3) return k

    if (memo.has(k)) return memo.get(k)!

    const res = helper(k - 1) + helper(k - 2)
    memo.set(k, res)

    return res
  }
  return helper(n)
}

// Input: n = 2
// Output: 2

// Input: n = 3
// Output: 3

console.log(climbStairs(2))
console.log(climbStairs(3))
console.log(climbStairs(4))
console.log(climbStairs(5))
console.log(climbStairs(45))

// climb 4
// 1 1 1 1
// 1 1 2
// 1 2 1
// 2 1 1
// 2 2

// - - - - - -

// climb 5
// 1 1 1 1 1
// 1 1 1 2
// 1 1 2 1
// 1 2 1 1
// 2 1 1 1
// 1 2 2
// 2 1 2
// 2 2 1

// - - - - - -

// Resume
// n = 1 → 1
// n = 2 → 2
// n = 3 → 3
// n = 4 → 5
// n = 5 → 8
// n = 6 → 13
// n = 7 → 21
