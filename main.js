var PORT = 3001
const express = require('express')
const app = express()

var server = app.listen(PORT, function () {
  console.log("Module1 Node Running On " + PORT)
})

setTimeout(() => { server.close() }, 250)
