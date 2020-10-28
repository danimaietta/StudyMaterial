/*
    info page https://stackoverflow.com/questions/14484613/load-local-json-file-into-variable
*/

// example 1 es5
//var json = require('./JSONGeneratorFile.json'); //with path

// example 1 es6
import json from './JSONGeneratorFile.json'
console.log(json)



// example 2
var myObj = {name: "John", age: 31, city: "New York"};

// stringify transforms Object to JSON
var myJSON = JSON.stringify(myObj);
console.log(myJSON)

// parse transforms JSON to Object 
var myObj = JSON.parse(myJSON)
console.log(myObj)