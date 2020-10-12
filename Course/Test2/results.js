/* *****************
    Respuesta 1
***************** */

function pickFruit(fruit){
  switch(fruit) {
    case "a":
      return "Apple";
    case "b":
      return "Banana";
    case "p":
      return "Pear";
    case "k":
      return "Kiwi";
    default:
      return "Watermelon";
  }
}
  
console.log(pickFruit(""))

/* *****************
    Respuesta 2
***************** */

// Forma dificil
var numbers = [400, 5, 2, 1, 7, 9, 10, 50, 30]

function giveHigherNumber(arr){
  var highNumber = 0;
  for(var i=0; i < arr.length; i++){
    if(highNumber < arr[i]){
      highNumber = arr[i]
    }
  }
  return highNumber
}

console.log(giveHigherNumber(numbers))


// Forma facil
// ES5
function giveHigherNumber(arr){
    var arraySorted = arr.sort(function(a,b) { 
      return a - b 
    })
    return arraySorted[arr.length-1]
}
  
console.log(giveHigherNumber(numbers))

// Forma facil
// ES6
function giveHigherNumber(arr){
    return arr.sort((a,b) => a - b)[arr.length-1]
}
  
console.log(giveHigherNumber(numbers))

/* *****************
    Respuesta 3
***************** */

var newArr = numbers

newArr.push(69)

console.log("numbers: " + numbers)
console.log("newArr: " + newArr)

/* *****************
    Respuesta 4
***************** */

function messageFruits(num, f){
  var fruit = pickFruit(f)
  if(num >= 4 && fruit == "Apple" || fruit == "Banana" || fruit == "Pear" || fruit == "Kiwi"){
    console.log("Me gustan estas frutas")
  }else if(fruit == "Watermelon"){
    console.log("no me gusta el Watermelon")
  }else{
    console.log("Me gustan estas frutas pero son muy pocas")
  }
}
  
messageFruits(4, "af")