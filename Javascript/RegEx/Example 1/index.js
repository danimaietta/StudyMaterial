// https://regexr.com/

/*
    test, exec and compile
*/

let sampleText = `Example text for the regex, text a`

let re1 = /text/g

console.log('--This is to show how test, exec and compile works: ')
console.log('re1 /text/g test:', re1.test(sampleText)) // true
console.log('re1 /text/g exec:', re1.exec(sampleText)) // ["text", index: 28, input: "Example text for the regex, text a"]
console.log('re1 /text/g compile:', re1.compile(sampleText)) // /Example text for the regex, text a/

let text = `RegExr was created by gskinner.com, and is proudly hosted by Media Temple.
Edit the Expression & Text to see matches. Roll over matches or the expression for details. PCRE & JavaScript flavors of RegEx are supported. Validate your expression with Tests mode. 1234 tatgg   
The side bar includes a Cheatsheet, full Reference, and va Help. You can also Save & Share with the Community, and view patterns you create or favorite in My Patterns.
Explore results with the Tools below. Replace & List output custom results. Details lists capture groups. Explain describes your expression in plain English.`

console.log('--This is to show the different filters we can use: ')
console.log('--Text:', text)
console.log("/([A-Z])\w/g ", /([A-Z])\w+/g.exec(text))
console.log("/([A-Z])\d/g ", /([A-Z])\d+/g.test(text))
console.log("/([A-Z])\s+/g ", /([A-Z])\s+/g.test(text))
console.log("/([A-Z])\S+/g ", /([A-Z])\s+/g.test(text))