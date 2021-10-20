var chain =
  'X 1 1 X X X 3 2 3 3 3 5 X 5 X X X X 3 X X 5 5 4 3 X 5 5 6 X X X 2 4 X X X X 6 X X 3 X X X 5 X 3 2 4 5 X 6 X 5 X X 2 X X 4 X 4 X'
var regex = /.{1,16}/g
var result = chain.match(regex)

console.log(result)
/***********
    [
    "X 1 1 X X X 3 2 ",
    "3 3 3 5 X 5 X X ",
    "X X 3 X X 5 5 4 ",
    "3 X 5 5 6 X X X ",
    "2 4 X X X X 6 X ",
    "X 3 X X X 5 X 3 ",
    "2 4 5 X 6 X 5 X ",
    "X 2 X X 4 X 4 X"
    ]
*/
