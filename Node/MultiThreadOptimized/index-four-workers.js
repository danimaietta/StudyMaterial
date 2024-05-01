const express = require("express");
const app = express();
const { Worker, isMainThread, parentPort } = require('worker_threads');

const port = process.env.PORT || 3000;
const THREAD_COUNT = 4;

function createWorker() {
  return new Promise(function (resolve, reject) {
    const worker = new Worker("./four-workers.js", {
      workerData: { thread_count: THREAD_COUNT },
    });

    worker.on("message", (data) => {
        resolve(data);
      });

    worker.on("error", (msg) => {
        reject(`An error ocurred: ${msg}`);
    });
  });
}

app.get("/blocking", async (req, res) => {
    const workerPromises = [];
  for (let i = 0; i < THREAD_COUNT; i++) {
    workerPromises.push(createWorker());
  }
  const thread_results = await Promise.all(workerPromises);
  const total =
    thread_results[0] +
    thread_results[1] +
    thread_results[2] +
    thread_results[3];
  res.status(200).send(`blocking result is ${total}`);
})

app.get('/non-blocking/', (req, res) => {
  res.status(200).send('Non-blocking request');
});

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});