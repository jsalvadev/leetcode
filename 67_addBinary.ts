function addBinary(a: string, b: string): string {
  const integerA = convertBinaryToInteger(a)
  const integerB = convertBinaryToInteger(b)

  return (integerA + integerB).toString(2)
}

function convertBinaryToInteger(bin: string): bigint {
  const base = 2
  let decimal = 0n
  let exponent = bin.length - 1

  for (const i of bin) {
    decimal += BigInt(i) * BigInt(base) ** BigInt(exponent)
    exponent--
  }

  return decimal
}

// Input: (a = '11'), (b = '1')
// Output: '100'

// Input: (a = '1010'), (b = '1011')
// Output: '10101'

// console.log(addBinary('11', '1'))
// console.log(addBinary('1010', '1011'))
console.log(
  addBinary(
    '10100000100100110110010000010101111011011001101110111111111101000000101111001110001111100001101',
    '110101001011101110001111100110001010100001101011101010000011011011001011101111001100000011011110011',
  ),
)

// Short Solution
// function addBinary(a: string, b: string): string {
//   return (BigInt('0b' + a) + BigInt('0b' + b)).toString(2)
// }
