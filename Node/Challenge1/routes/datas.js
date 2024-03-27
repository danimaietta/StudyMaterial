const express = require('express')
const router = express.Router()

router.get('/', (req, res, next) => {
    res.status(200).json({
        message: 'Handling GET request to /data'
    })
})

router.post('/data', (req, res) => {
    const numbers = req.body

    console.log(numbers)

    if (numbers.length !== 500) {
        throw new Error('Invalid numbers length, must be 500')
    } 

    res.json('Hello World')
})

module.exports = router;
