/* O(1) */
//console.log('hi')

/* O(n) */
for (let i = 0; i <= 5; i++) {
  //console.log('hi' + i)
}

/* O(log n) */
for (let i = 0; i <= 5; i++) {
  if (i === 3) {
    //console.log('hi')
  }
}

/* O(n𝆜2) */
for (let i = 0; i <= 5; i++) {
  for (let j = 0; j <= 5; j++) {
    //console.log('hi' + i + j)
  }
}

/* O(n log n) */

/* O(2𝆜n) */
function fibonacci(num) {
  if (num <= 1) {
    return num
  }
  return fibonacci(num - 2) + fibonacci(num - 1)
}
console.log(fibonacci(8))
