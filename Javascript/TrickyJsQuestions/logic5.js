/*
    Write a function that accepts a String as an argument 

    The function should capitalize the first letter of a word,
    then lower case, then upper case and so on
*/

function weirdCase(str) {
    return str.split(' ').map(word => {
        return word.split('').map((char, i) => {
            return i % 2 === 0 ? char.toUpperCase() : char.toLowerCase();
        }).join('');
    }).join(' ');
}

console.log(weirdCase('Hello World')) // HeLlO WoRlD

/*
    Write a function closes the second divs tag in a string
*/

function closeDivs(str) {
    let count = 0;
    let i = 0;
    for(let i=0; i<str.length; i++) {
        if(str[i] === '<' && str[i+1] === 'd' && str[i+2] === 'i' && str[i+3] === 'v') {
            count++;
        }
        if(count === 2) {
            return str.slice(0, i) + '</div>' + str.slice(i+4);
        }
    }
}

console.log('closeDivs: ', closeDivs('<div><div><div><div>')) // <div><div></div><div>