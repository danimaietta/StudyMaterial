function House(height, price, floors) {
  this.height = height
  this.price = price
  this.floors = floors
}

const myHouse = new House('5 meters', 200000, 2)

console.log(myHouse)
