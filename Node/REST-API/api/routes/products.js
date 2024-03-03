const express = require('express')
const router = express.Router()
const mongoose = require('mongoose')

const Product = require('../models/product')

router.get('/', (req, res, next) => {
    res.status(200).json({
        message: 'Handling GET request to /products'
    })
})

router.post('/', (req, res, next) => {
    const product = new Product({
        _id: new mongoose.Types.ObjectId(),
        name: req.body.name,
        price: req.body.price
    })

    product.save().then(result => {
        console.log(result)
        res.status(201).json({
            message: 'Handling POST request to /products',
            createdProduct: product
        })
    }).catch(error => {
        console.log(error)
        res.status(500).json({ error })
    })
    
    next()
})

router.patch("/:productId", (req, res, next) => {
    const id = req.params.productId
    const updateOps = {};
})

router.get('/:productId', (req, res, next) => {
    const id = req.params.productId;
    Product.findById(id)
    .exec()
    .then(doc => {
        doc ? res.status(200).json(doc) : res.status(404).json({ message: 'No valid entrey found for provided ID' })
    })
    .catch(error => {
        console.log(error)
        res.status(500).json({ error })
    })
    /*
    if(id === 'special'){
        res.status(200).json({
            message: 'You discovered the special ID'
        })
    } else {
        res.status(200).json({
            message: `You are using id ${id}`
        })
    }
    */
})

router.patch('/:productId', (req, res, next) => {
    const { productId } = req.params;
    return res.status(200).json({
        message: `Updated product: ${productId}`
    })
})

router.delete('/:productId', (req, res, next) => {
    const id = req.params.productId;
    Product.remove({ _id: id })
        .exec()
        .then(result => {
            res.status(200).json({
                message: `Deleted product: ${productId}`,
                result
            })
        })
        .catch(error => {
            console.log(error)
            res.status(500).json(error)
        })
})

module.exports = router;