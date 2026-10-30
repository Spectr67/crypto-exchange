const cars = [
  {
    brand: 'Audi',
    price: 10000,
    engine: 'V8',
  },
  {
    brand: 'Ford',
    price: 50000,
    engine: 'V4',
  },
]

const styles = {
  brand: 'blue',
  price: 'green',
  engine: 'red',
}

let result = cars.map((car) => {
  return Object.fromEntries(
    Object.entries(car).map(([key, val]) => {
      return [
        key,
        {
          value: val,
          style: styles[key],
        },
      ]
    }),
  )
})

console.log(result)
