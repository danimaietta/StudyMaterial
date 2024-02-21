const express = require('express')
const router = express.Router()

router.get('/', (req, res, next) => {
    res.status(200).json({
        message: 'Handling GET request to /products'
    })
})

router.post('/', (req, res, next) => {
    const product = {
        name: req.body.name,
        price: req.body.price
    }
    res.status(201).json({
        message: 'Handling POST request to /products',
        createdProduct: product
    })
    next()
})

router.get('/:productId', (req, res, next) => {
    const id = req.params.productId;
    if(id === 'special'){
        res.status(200).json({
            message: 'You discovered the special ID'
        })
    } else {
        res.status(200).json({
            message: `You are using id ${id}`
        })
    }
})

router.patch('/:productId', (req, res, next) => {
    const { productId } = req.params;
    return res.status(200).json({
        message: `Updated product: ${productId}`
    })
})

router.delete('/:productId', (req, res, next) => {
    const { productId } = req.params;
    res.status(200).json({
        message: `Deleted product: ${productId}`
    })
})

module.exports = router;