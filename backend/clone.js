// structuredClone({ x: 42 })

import { Pair } from './pair.js'

// structuredClone({
//   x() {
//     return 42
//   },
// })

let o = { a: 101 }

Object.setPrototypeOf(o, {
  x() {
    return 42
  },
})

// structuredClone(o)
// console.log(o)
// console.log(Object.getPrototypeOf(o))
// console.log(o.x())

const pair = new Pair(1, [2, 3], 3)
pair.foo()
// console.log(Object.getPrototypeOf(pair))

// function fullClone(obj) {
//   const copyObj = structuredClone(obj)
//   Object.setPrototypeOf(copyObj, Object.getPrototypeOf(obj))
//   return copyObj
// }

// // undefined.abc

// const copyPair = fullClone(pair)
// copyPair.foo()
// copyPair.lastPrice = 42
// console.log(copyPair)
// console.log(pair)

//

// const copyPair = Object.assign({}, pair)

const copyPair = { ...pair }

Object.setPrototypeOf(copyPair, Object.getPrototypeOf(pair))
console.log(copyPair)
copyPair.foo()

//

// const a = { a: 1 }
// const b = Object.assign(a, { b: 2 })

// console.log(b === a)
// console.log(a)
// console.log(b)

//
