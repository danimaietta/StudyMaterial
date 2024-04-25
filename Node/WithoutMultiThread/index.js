const express = require('express');
const app = express();
const port = 3000;

app.get('/non-blocking/', (req, res) => {
    res.status(200).send('Non-blocking request');
});

app.get('/blocking', (req, res) => {
    let sum = 0;
    for (let i = 0; i < 1000000000000; i++) {
        sum += i;
    }
    res.status(200).send('Blocking request, the sum is ' + sum);
});

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});