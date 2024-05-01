const { workerData, parentPort } = require('worker_threads');

let sum = 0;
for (let i = 0; i < 100000000000/workerData.thread_count; i++) {
    sum += i;
}

parentPort.postMessage(sum);