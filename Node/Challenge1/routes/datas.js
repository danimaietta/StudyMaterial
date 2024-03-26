const express = require('express')
const router = express.Router()

router.get('/', (req, res, next) => {
    res.status(200).json({
        message: 'Handling GET request to /data'
    })
})

router.post('/data', (req, res, next) => {
    const numbers = req.body

    if (numbers.length === 500) {
        res.status(201).json({
            message: 'Order was created',
            createdOrder: order
        })
    } else {
        res.status(400).json({
            message: 'Invalid request. Numbers length should be 500.'
        });
    }
})

router.get('/:orderId', (req, res, next) => {
    res.status(200).json({
        message: 'Order details',
        orderId: req.params.orderId
    })
})

module.exports = router;
