const express = require('express')
const app = express()

// server configuration parameters
const config = require('./config.json')
const port = config.port || 3000
const host = config.host || '127.0.0.1'

// routes from server
require('./routes/router.js')(app)

app.listen(port, host, () => {
  console.log(`${host} is listening on port ${port}`)
})
