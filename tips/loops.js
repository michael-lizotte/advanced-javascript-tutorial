const orders = [500, 30, 99, 15, 223]

'Bad Code 💩'

const total = 0
const withTax = []
const highValue = []

for (i = 0; i < orders.length; i++) {
  total += orders[i];
  withTax.push(orders[i] * 1.1)
  if (orders[i] > 100) {
    highValue.push(orders[i])
  }
}

'Good Code ✅'
const total = orders.reduce((acc, cur) => acc + cur)
const withTax = orders.map(v => v * 1.1)
const highValue = orders.filter(v => v > 100)