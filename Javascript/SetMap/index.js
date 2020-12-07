/*
    Map
*/

// monday, tuesday, wensday, thursday, friday are type Symbol
const myObj = { 
    monday: 'review and refactor',
    tuesday: 'new topic',
    wensday: 'new topic',
    thursday: 'review and refactor',
    friday: 'among us',
}

console.log(myObj.monday) // review and refactor

function a(){
    console.log('a')
}

const myMap = new Map([ 
    [1, 'review and refactor'], 
    [a, 'new topic'],
    ['wednesday', 'new topic'],
    ['thursday', 'review and refactor'],
    [5, 'among us'],
    ['saturday', 'catch up, QA']
])

// size, has, entries, get, values, set
console.log('myMap: ', myMap) // {"monday" => "review and refactor", "tuesday" => "new topic", "wensday" => "new topic", "thursday" => "review and refactor", "friday" => "among us"}
console.log('myMap.values: ', myMap.values()) // {"review and refactor", "new topic", "new topic", "review and refactor", "among us"}
console.log('myMap.size: ', myMap.size) // 6
console.log('myMap.has: ', myMap.has('monday')) // true
console.log('myMap.keys: ', myMap.keys()) // {"monday" => "review and refactor", "tuesday" => "new topic", "wensday" => "new topic", "thursday" => "review and refactor", "friday" => "among us"}
console.log('myMap.get: ', myMap.get('friday')) // among us
console.log('myMap.set: ', myMap.set('sunday', 'rest')) // {..., "sunday" => "rest"}
console.log('toArray: ', [...myMap.values()]) // ["review and refactor", "new topic", "new topic", "review and refactor", "among us"]



/*
    Set
*/

const myArray = [1,2,3,4,5,5,5]

const mySet = new Set(myArray) // [1,2,3,4,5]

console.log(`mySet: ${mySet}`) // [object Set]
console.log(`size: ${mySet.size}`) // 5
console.log(`has: ${mySet.has(4)}`) // true
console.log(`add: ${mySet.add(6)}`) // [1,2,3,4,5,6]
console.log(`values: ${mySet.delete(1)}`) // [2,3,4,5,6]
console.log(`toArray: ${[...mySet]}`) // 2,3,4,5,6

// set does not accept objects

