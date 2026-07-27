// ;['a', 'b', 'c', 'f'].forEach(char => {
//   if (char === 'b') return
//   console.log(char)
// })

function methodName() {
  for (const char of ['a', 'b', 'c', 'f']) {
    for (const char of ['a', 'b', 'c', 'f']) {
      for (const char of ['a', 'b', 'c', 'f']) {
        for (const char of ['a', 'b', 'c', 'f']) {
          for (const char of ['a', 'b', 'c', 'f']) {
            for (const char of ['a', 'b', 'c', 'f']) {
              for (const char of ['a', 'b', 'c', 'f']) {
                if (char === 'b') break
                console.log(char)
              }
              if (char === 'b') break
              console.log(char)
            }
            if (char === 'b') break
            console.log(char)
          }
          if (char === 'b') break
          console.log(char)
        }
        if (char === 'b') break
        console.log(char)
      }
      if (char === 'b') break
      console.log(char)
    }
    if (char === 'b') break
    console.log(char)
  }
  console.log('after for')
}

methodName()
