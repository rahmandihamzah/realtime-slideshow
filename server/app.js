if (process.env.NODE_ENV === 'development') {
  require('dotenv').config()  
}

const express = require('express')
const app = express()
const http = require('http')
const io = require('socket.io')
const cors = require('cors')

app.use(cors())

const server = http.createServer(app)

module.exports = app