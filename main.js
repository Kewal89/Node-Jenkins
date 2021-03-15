var PORT = 3002
const express = require('express')
const app = express()

var server = app.listen(PORT, function () {
  console.log("Module2 Node Running On " + PORT)
})

setTimeout(() => { server.close() }, 250)
