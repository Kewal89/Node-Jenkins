var PORT = 3005
const express = require('express')
const app = express()

var server = app.listen(PORT, function () {
  console.log("Module5 Node Running On " + PORT)
})

setTimeout(() => { server.close() }, 250)
