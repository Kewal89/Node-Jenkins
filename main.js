var PORT = 3008
const express = require('express')
const app = express()

var server = app.listen(PORT, function () {
  console.log("Module8 Node Running On " + PORT)
})

setTimeout(() => { server.close() }, 250)
