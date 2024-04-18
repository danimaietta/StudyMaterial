class Foo {
  
  constructor(bar){
    this.bar = bar
  }

  doSomething() {
    this.bar.flag && console.log('done')
  }

}

class Bar {
  flag = true
}

const bar = new Bar()
const foo = new Foo(bar)

foo.doSomething()