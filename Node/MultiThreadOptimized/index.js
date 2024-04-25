const express = require('express');
const { Worker, isMainThread, parentPort } = require('worker_threads');
const app = express();
const port = 3000;

app.get('/non-blocking/', async (req, res) => {
    res.status(200).send('Non-blocking request');
});

app.get('/blocking', async (req, res) => {
    const worker = new Worker('./worker.js')
    
    worker.on('message', (sum) => {
        res.status(200).send('Blocking request, the sum is ' + sum);
    });

    worker.on('error', (error) => {
        console.error(error);
    });
});

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});