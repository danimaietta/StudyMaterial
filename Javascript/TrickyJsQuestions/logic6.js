/*
    check first and last index of an array of numbers and return the sum of the two that is equal to 18
*/

function checkSum(arr) {
    let counter = 1;

    arr.sort((a, b) => a - b);
    
    for(let i=0; i <= arr.length; i++) {
        let first = arr[i];
        let last = arr[arr.length-counter];
        
        if(first === last) return false
        if(first + last > 18) counter++;
        if(first + last === 18) return true;
    }

    return false
}

console.log('checkSum: ', checkSum([1, 20, 18, 4, 5, 6, 7, 8, 9])) // true