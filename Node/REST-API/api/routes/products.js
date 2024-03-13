const express = require('express')
const router = express.Router()
const mongoose = require('mongoose')

const Product = require('../models/product')

router.get('/', (req, res, next) => {
    Product.find()
        .exec()
        .then(docs => {
            console.log('Products GET docs:', docs)
            if(docs.length >= 0){
                res.status(200).json(docs)
            } else {
                res.status(404).json({
                    message: 'No entries found'
                })
            }
        })
        .catch(error => {
            console.log('Products GET error', error)
            res.status(500).json({ error })
        })
    res.status(200).json({
        message: 'Handling GET request to /products'
    })
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
        res.status(500).json(error)
    })
    
    next()
})

// If price is more than 1000 then don't update the price
app.put('/products/:id', async (req, res) => {
    const { id } = req.params;
    const { name, price } = req.body;
  
    try {
        const product = await Product.findById(id);
  
        if (!product) {
            return res.status(404).json({ message: 'Product not found' });
        }
  
        product.name = name;
        if (price <= 1000) {
        product.price = price;
        }
  
        await product.save();
  
        res.json({ message: 'Product updated successfully', product });
    } catch (err) {
        res.status(500).json({ message: 'Something went wrong', err });
    }
})

router.patch('/:productId', (req, res, next) => {
    const id = req.params.productId;
    const updateOps = {};
    for(const ops of req.body){
        updateOps[ops.propName] = ops.value
    }
    Product.updateOne({ _id: id}, { $set: updateOps })
        .exec()
        .then(result => {
            console.log(result)
            res.status(200).json(result)
        })
        .catch(error => {
            console.log(error)
            res.status(500).json(error)
        })
})

router.delete('/:productId', (req, res, next) => {
    const id = req.params.productId;
    Product.deleteOne({ _id: id })
        .exec()
        .then(result => {
            res.status(200).json({
                message: `Deleted product: ${id}`,
                result
            })
        })
        .catch(error => {
            console.log(error)
            res.status(500).json(error)
        })
})

module.exports = router;