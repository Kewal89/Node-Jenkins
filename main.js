var PORT = 3003
const express = require('express')
const app = express()

var server = app.listen(PORT, function () {
  console.log("Module3 Node Running On " + PORT)
})

setTimeout(() => { server.close() }, 250)
