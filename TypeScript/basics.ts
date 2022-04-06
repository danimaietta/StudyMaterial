let id: number = 10
let myName: string = "Daniel"
let isMale: boolean = true
let x: any = 69
let ids: number[] = [1, 2, 3, 4, 5, 6, 7, 8]
let arr: any[] = [1, true, "hi"]

let person: [number, string, boolean] = [1, "Daniel", true]

let employee: [number, string, boolean][]
employee = [
  [1, "Daniel", true],
  [2, "John", true],
  [3, "Brenda", false]
]

let workId: number | string = "3956865"

enum Direction1 {
  Up = 5,
  Down,
  Left,
  Right
}

/*const user: { id: number; name: string } = {
  id: 1,
  name: "John"
}*/

type User = { id: number; name: string }

const user: User = {
  id: 1,
  name: "John"
}

let cid: any = 1
//let customerId = <number>cid
let customerId = cid as number

function addNum(x: number = 1, y: number = 3): number {
  return x + y
}
console.log(addNum(1, 2))

function display(message: string | number): string | number {
  return "this is the message: " + message
}
display("hello world")
display(420)

function printMessage(message: string | number): void {
  console.log(message)
}
printMessage("hello world")
