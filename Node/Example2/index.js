const http = require("http")
const servidor = http.createServer()
const puerto = 3000

servidor.listen(3000, () => {
  console.log("servidor en puerto 3000")
})
