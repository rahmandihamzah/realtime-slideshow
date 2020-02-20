if (process.env.NODE_ENV === 'development') {
  require('dotenv').config()  
}

const express = require('express')
const app = express()
const http = require('http').createServer(app)
const port = Number(process.env.PORT)
const io = require('socket.io')(http)
const cors = require('cors')

app.use(cors())

io.on('connection', (socket) => {
  console.log('connect')

  socket.on('slideStart', (payload) => {
    io.emit('slideNo', payload)
  })
})

http.listen(port, () => {
  console.log('listening on', port)
})

module.exports = app