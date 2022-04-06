"use strict";
let id = 10;
let myName = "Daniel";
let isMale = true;
let x = 69;
let ids = [1, 2, 3, 4, 5, 6, 7, 8];
let arr = [1, true, "hi"];
let person = [1, "Daniel", true];
let employee;
employee = [
    [1, "Daniel", true],
    [2, "John", true],
    [3, "Brenda", false]
];
let workId = "3956865";
var Direction1;
(function (Direction1) {
    Direction1[Direction1["Up"] = 5] = "Up";
    Direction1[Direction1["Down"] = 6] = "Down";
    Direction1[Direction1["Left"] = 7] = "Left";
    Direction1[Direction1["Right"] = 8] = "Right";
})(Direction1 || (Direction1 = {}));
const user = {
    id: 1,
    name: "John"
};
let cid = 1;
//let customerId = <number>cid
let customerId = cid;
function addNum(x = 1, y = 3) {
    return x + y;
}
console.log(addNum(1, 2));
function display(message) {
    return "this is the message: " + message;
}
display("hello world");
display(420);
function printMessage(message) {
    return "this is the message: " + message;
}
display("hello world");
