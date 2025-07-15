function mySqrt(x: number): number {
  if (x < 2) return x

  let aux = x
  let last: number
  while (true) {
    last = aux
    aux = Math.floor(aux / 2)

    if (aux * aux === x) return aux
    if (aux * aux > x) continue
    break
  }

  while (last > aux) {
    last--
    if (last * last <= x) return last
  }

  return aux
}

// Input: x = 4
// Output: 2

// Input: x = 8
// Output: 2

// 16 -> 4

console.log(mySqrt(4))
console.log(mySqrt(8))
console.log(mySqrt(9))
console.log(mySqrt(16))
console.log(mySqrt(25))
