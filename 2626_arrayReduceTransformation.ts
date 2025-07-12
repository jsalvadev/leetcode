type Fn = (accum: number, curr: number) => number

function reduce(nums: number[], fn: Fn, init: number): number {
  if (nums.length === 0) return init

  let val = fn(init, nums[0])
  if (nums.length === 1) return val

  for (let i = 1; i < nums.length; i++) {
    val = fn(val, nums[i])
  }

  return val
}

// Input:
// nums = [1,2,3,4]
// fn = function sum(accum, curr) { return accum + curr; }
// init = 0
// Output: 10
// Explanation:
// initially, the value is init=0.
// (0) + nums[0] = 1
// (1) + nums[1] = 3
// (3) + nums[2] = 6
// (6) + nums[3] = 10
// The final answer is 10

const nums = [1, 2, 3, 4]
const fn = function sum(accum: number, curr: number): number {
  return accum + curr
}

const init = 0
const result = reduce(nums, fn, init)
console.log(result)
