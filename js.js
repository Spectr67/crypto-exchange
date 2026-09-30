function formatString(string, variant) {
  if (variant === 2) {
    return string.toUpperCase()
  }
  return string.toLowerCase()
}

// старая фича

console.log(formatString('FoObAr'))

// новые фичи

console.log(formatString('FoObAr', 1)) // ловер кейс

console.log(formatString('FoObAr', 2)) // аппер кейс
