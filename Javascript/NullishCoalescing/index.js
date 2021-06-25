/*** Example 1 ***/

/*           using ||         */
// rejects 0
function calculatePrice(price, taxes, item) {
  taxes = taxes || 0.05
  const total = price * (1 + taxes)
  console.log(`       Your ${item} cost: ${total}`)
}

console.log('|| operator:')
calculatePrice(100, 0.07, 'Car') // 107
calculatePrice(100, -0.06, 'Candy') // 94
calculatePrice(100, 0, 'Coffee') // 105
calculatePrice(100, undefined, 'Nothing') // 105

/*    nullish coalescing     */
// acepts 0
function calculatePrice2(price, taxes, item) {
  taxes = taxes ?? 0.05
  const total = price * (1 + taxes)
  console.log(`       Your ${item} cost: ${total}`)
}

console.log('?? operator: ')
calculatePrice2(100, 0.07, 'Car') // 107
calculatePrice2(100, -0.06, 'Candy') // 94
calculatePrice2(100, 0, 'Coffee') // 100
calculatePrice2(100, undefined, 'Nothing') // 105

/*** Example 2 ***/
let value

value = 0

console.log(value || 420) // 420
console.log(value ?? 420) // 0

value = false
console.log(value || 420) // 420
console.log(value ?? 420) // false

value = undefined
console.log(value || 420) // 420
console.log(value ?? 420) // 420

value = true
console.log(value || 420) // true
console.log(value ?? 420) // true

value = null
console.log(value || 420) // 420
console.log(value ?? 420) // 420
