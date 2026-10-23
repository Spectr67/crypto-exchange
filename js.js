const o = {
  aaa() {
    return {
      a: 123,
    }
  },

  bbb: {
    create() {
      // console.log(this)
      // console.log(this === o.methods)
      const a = this.a
      return a
    },
  },
}

let obj = o.aaa()
console.log(obj)

let result = o.bbb.create.call(obj)
console.log(result)

// function normalFunctionStatementDeclaration() {
//   // body
// }

// const normalFunctionExpression = function () {
//   // body
// }
