// Microtask
// Macrotask
// Execution order:
// 1. Execute synchronous tasks in current macrotask
// 2. Execute microtasks in current macrotask
// 3. Execute synchronous tasks in next macrotask
// 4. Execute microtasks in next macrotask

console.log('1');

setTimeout(() => {
    console.log('2');
}, 0);

Promise.resolve().then(() => {
    console.log('3');
});

console.log('4');

// 1
// 4
// 3
// 2

