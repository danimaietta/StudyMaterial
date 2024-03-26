const express = require('express')
const app = express()
const morgan = require('morgan')
const bodyParser = require('body-parser')

const dataRoutes = require('./routes/datas')

app.use('/data', dataRoutes)

app.use(morgan('dev'))
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

module.exports = app;