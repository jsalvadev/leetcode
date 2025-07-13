// oxlint-disable-next-line no-unused-vars
interface Array<T> {
  last(): T | -1
}

Array.prototype.last = function () {
  if (this.length === 0) return -1
  return this.at(this.length - 1)
}

/**
 * const arr = [1, 2, 3];
 * arr.last(); // 3
 */

const arr = [1, 2, 3]
console.log(arr.last())
