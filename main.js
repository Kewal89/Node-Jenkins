var PORT = 3007
const express = require('express')
const app = express()

var server = app.listen(PORT, function () {
  console.log("Module7 Node Running On " + PORT)
})

setTimeout(() => { server.close() }, 250)
