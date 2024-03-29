const express = require('express')
const router = express.Router()

let currentArray = [];

router.get('/data', (req, res) => {
    currentArray.sort((a, b) => a - b)

    console.log('currentArray:', currentArray)

    res.status(200).json({
        numbers: currentArray
    })
})

router.post('/data', (req, res) => {
    const numbers = req.body

    // Check if the input is an array
    if(!numbers.length) {
        throw new Error('Invalid input, must be an array')
    }
    
    // Check if the array has 500 elements
    if (numbers.length !== 100) {
        throw new Error('Invalid numbers length, must be 100')
    } 

    // Check if the array contains only numbers
    numbers.forEach(item => {
        if (typeof item !== 'number') {
            throw new Error('Invalid input, must be a number')
        }
    })

    currentArray = numbers
    
    res.json('Hello World')
})

router.patch('/data/:newNumber', (req, res) => {
    const newNumber = req.params.newNumber
    try {

        // Perform the patch operation on the currentArray
        currentArray.push(+newNumber)

        res.json('Data patched successfully')
        res.status(200).json('Data patched successfully')
    } catch (error) {
        res.status(400).json(error.message)
    }
})

module.exports = router;
