let obj = { x: 3 }

// const arrObjs = [obj]

// console.log(arrObjs)

// arrObjs[0].x = 5

// console.log(arrObjs)

// console.log(obj)

let obj2 = structuredClone(obj)

obj2.x = 101

console.log(obj2)

console.log(obj)
