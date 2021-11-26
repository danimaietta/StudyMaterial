function Foo() {
  const baz = new Bar()
  console.log('baz.flag:', baz.flag)
}

class Bar {
  flag = true
}
