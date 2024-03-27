const express = require('express')
const app = express()
const morgan = require('morgan')
const bodyParser = require('body-parser')

const dataRoutes = require('./routes/datas')

app.use(morgan('dev'))
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

app.use('/api', dataRoutes)

module.exports = app;