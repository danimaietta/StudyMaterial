class Counter {
    #count = 0;
  
    increment() {
      this.#count++;
    }
  
    decrement() {
      if (this.#count > 0) {
        this.#count--;
      }
    }
  
    getCount() {
      return this.#count;
    }
}
  
const counter = new Counter();

counter.increment();
console.log(counter.getCount()); // 1

counter.decrement();
console.log(counter.getCount()); // 0
  
// Trying to access the private attribute directly will result in an error
// console.log(counter.#count); // Error: Private field '#count' must be declared in an enclosing class