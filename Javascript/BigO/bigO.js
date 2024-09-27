/* O(1) */
console.log('hi')

/* O(log n) */
for (let i = 0; i <= 6; i++) {
  if (i === 3) {
    return i
  }
}

/* O(n) */
for (let i = 0; i <= 5; i++) {
  return i
}

/* O(n log n) */
let n = 6
for(let i = 0; i <= 6; i++){
  for(let j = 0; j <= n; j++){
    n = n / 2
  }
}

/* O(n𝆜2) */
for (let i = 0; i <= 5; i++) {
  for (let j = 0; j <= 5; j++) {
    console.log('hi' + i + j)
  }
}

/* O(2𝆜n) */
function fibonacci(num) {
  if (num <= 1) {
    return num
  }
  return fibonacci(num - 2) + fibonacci(num - 1)
}
console.log(fibonacci(8))
