export function calc(a, b, c) {
  return (a + b) * c
}

function superCalculator(numbers) {
  let magicNumber = 100
  let x = calc(numbers.pop(), numbers.pop(), magicNumber)
  let y = calc(numbers.pop(), numbers.pop(), magicNumber)
  return calc(x, y, magicNumber)
}

// let result = superCalculator([1, 2, 3, 4])

function hyperComputer(calculatorA, calculatorB, data) {
  // body
  // body
  // body
  // body
  // body
}

// console.log(result)
