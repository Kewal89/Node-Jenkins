var PORT = 3006
const express = require('express')
const app = express()

var server = app.listen(PORT, function () {
  console.log("Module6 Node Running On " + PORT)
})

setTimeout(() => { server.close() }, 250)
