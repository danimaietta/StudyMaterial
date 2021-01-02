/* ********************
        CALLBACK
******************** */

// callback with setTimeout
var callback = function() {
    console.log("Done!")
}

setTimeout(callback, 5000);

// callback with normal methods
function greeting(name) {
    alert('Hi ' + name)
}
  
function goodBye(name){
    alert('Goodbye ' + name)
}
  
function processUserEntry(callback) {
    var name = prompt('Please insert your name.')
    callback(name);
}
  
processUserEntry(goodBye);

// Asynchronous vs Synchronous 

var synchronous = () => console.log("Do something") 
synchronous()
setTimeout(() => console.log("Done!"), 5000)
synchronous()

// Callback hell

setTimeout(function() {
    console.log("Done!")
      setTimeout(function() {
        console.log("Done!")
        setTimeout(function() {
          console.log("Done!")
        }, 5000);
    }, 5000);
}, 5000);



