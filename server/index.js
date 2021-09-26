const express = require('express')
const socketio = require('socket.io')
const http = require('http')

const PORT = process.env.PORT || 5000
const router = require('./router')

const app = express()
const server = http.createServer(app)
const io = socketio(server , {
  cors: {
    origin: "http://localhost:3000",
    methods: ["GET", "POST"]
  }
})

io.on('connection', (socket) => {
  console.log('we have a new connection')
  socket.on('join', ({ name, room }, callback) => {
    console.log(name, room)
    callback()
  })
  socket.on('disconnect', () => {
    console.log('User has left!')
  })
})

app.use(router)

server.listen(PORT, () => console.log(`server has been started ${PORT}`))