const app = require('./index') 
const http = require('http')

const port = process.env.PORT || 3000

const server = http.createServer(app)

server.listen(port)

//process.env.DEBUG = 'flint'