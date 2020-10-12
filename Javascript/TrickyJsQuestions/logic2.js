/* 
    Make a statement where console.log(obj.getA().getB()) will print a and b properties from obj 
*/

const obj = {
    a: 1,
    b: 2,
    getA(){
      console.log(this.a)
      //return this
    },
    getB(){
      console.log(this.b)
    }
}
  
console.log(obj.getA().getB())

// ---------------------------------------------------------------------------------------------------------------------------------

/* 
    Make [1,2].print() works dynamically 
    Lets state this is not a good practice
*/

Array.prototype.print = function() {
    let result = ''
    console.log('this:', this)
    for(let i=0; i<this.length; i++){
      if (i+1 === this.length){
        result += this[i]
      }else{
        result += `${this[i]}, `
      }
    }
    console.log('result:', result)
}

let arr = [1,2,3,4]
arr.print()

let animals = ['🐔', '🐷', '🐑', '🐇'];

// ---------------------------------------------------------------------------------------------------------------------------------

/* clone an object */

const newObj = {
    a: {
        b: {
            c: 1
        }
    }
}

const clone = Object.create(newObj)

clone.a.b.c = 2

console.log('clone: ', clone.a.b.c)

// ---------------------------------------------------------------------------------------------------------------------------------

/* 
  Given a and b arrays, make a third array c 
  that contains the values in order unrepeated  
*/

const a = [1,2,5,7,9]
const b = [2,5,7,12,100]

const c = [...new Set(a.concat(b).sort((a,b) => a > b))]
console.log(c)

// ---------------------------------------------------------------------------------------------------------------------------------

/* 
  What does console.log(this.x) will show?
*/

const obj100 = {
    x: 1,
    getX(){
      const inner = function() { // change to arrow function
        // console.log(this.x)
      }
      inner()
    }
}
  
obj100.getX()