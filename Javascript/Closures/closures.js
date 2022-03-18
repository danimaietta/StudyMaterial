for (var i = 0; i < 3; i++) {
  const log = () => {
    console.log(i)
  }
  setTimeout(log, 100)
}

function f1() {
  var a = 1
  f2()
  const f2 = () => {
    var b = 2
    console.log(a, b)
  }
}
f1()
