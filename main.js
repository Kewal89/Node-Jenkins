var PORT = 3004
const express = require('express')
const app = express()

var server = app.listen(PORT, function () {
  console.log("Module4 Node Running On " + PORT)
})

setTimeout(() => { server.close() }, 250)
