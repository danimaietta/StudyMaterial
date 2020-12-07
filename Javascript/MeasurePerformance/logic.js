/*
    This way you know witch method takes more time and adapt the application if there is 2 or more ways to resolve the same problem
*/

const nums = Array(2000).fill(5)

console.time('forEach')
const res1 = nums.forEach(x => x * 5) 
console.timeEnd('forEach') // 0.129150390625 ms

console.time('map')
const res2 = nums.map(x => x * 5) 
console.timeEnd('map') // 0.44384765625 ms

console.time('while')
let i = 0
let arr = []
do{
    arr.push(nums[i])
    i++
}while(i < nums.length)
console.timeEnd('while') // 0.609130859375 ms