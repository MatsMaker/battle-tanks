const shoe = require('shoe');
const http = require('http');
const express = require('express');
const dnode = require('dnode');

const PORT = 8000;

const app = express();

app.use(express.static(__dirname + '/../static'));

const server = http.createServer(app);

const io = require('socket.io')(server);

const usersArePlaying = [];
const tanks = [];

io.on('connection', socket => {
  console.log('A user connected');

  socket.on('auth', response => {
    io.emit('auth', {userId: response.auth});
  });

  socket.on('startGame', response => {
    usersArePlaying.push(response.userId);
    io.emit('startGame', {
      userId: response.userId,
      data: {
        tanks: tanks
      }
    });
  });

  socket.on('initTank', response => {
    let userTank = tanks.find(tank => {
      return response.userId == tank.player
    });
    if (userTank === undefined) {
      tanks.push(response.data.tank);
    } else {
      tanks.forEach((tank, index, tanksArray) => {
        if (tank.player == response.userId) {
          tanksArray[index] = response.data.tank
        }
      });
    }
    io.emit('initTank', {
      userId: response.userId,
      data: {
        tanks: tanks
      }
    });
  });

  socket.on('getTanks', response => {
    io.emit('getTanks', {
      userId: response.userId,
      data: {
        tanks: tanks
      }
    });
  });

  socket.on('updateTank', response => {
    tanks.forEach((tank, index, tanksArray) => {
      if (tank.player === response.tank.player) {
        tanksArray[index] = response.tank;
      }
    })
    console.log(tanks);
  });

  socket.on('disconnect', function () {
    console.log('disconnect');
  });

});
server.listen(PORT);
