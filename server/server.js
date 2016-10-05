const shoe = require('shoe');
const http = require('http');
const express = require('express');
const dnode = require('dnode');
const _ = require('underscore');

const PORT = 8000;

const app = express();
app.use(express.static(__dirname + '/../static'));
const server = http.createServer(app);
const io = require('socket.io')(server);

const usersArePlaying = [];
const tanks = [];

server.listen(PORT);

io.on('connection', socket => {
  console.log('new connect ', socket.id);

  socket.on('message', response => {
    let data;
    switch (response.type) {

      case 'auth':
        const userId = (response.data.auth !== null)
          ? response.data.auth
          : new Date().getTime();
        const userIndex = usersArePlaying.findIndex(user => user.userId == userId);
        if (userIndex > -1) {
          usersArePlaying[userIndex].connectedId = socket.id;
        } else {
          usersArePlaying.push({userId: userId, connectedId: socket.id});
        }
        data = {
          userId
        };
        break;

      case 'getTanks':
        data = {
          tanks: tanks
        };
        break;

      case 'updateTank':
        tanks.forEach((tank, index, tanksArray) => {
          if (tank.player === response.data.tank.player) {
            tanksArray[index] = _.extend(tanksArray[index], response.data.tank);
          }
        });
        data = {
          result: true
        };
        break;

      case 'initTank':
        let userTank = tanks.find(tank => {
          return response.data.userId == tank.player
        });
        if (userTank === undefined) {
          tanks.push(response.data.tank);
        } else {
          tanks.forEach((tank, index, tanksArray) => {
            if (tank.player == response.data.userId) {
              tanksArray[index] = response.data.tank
            }
          });
        }
        data = {
          tanks: tanks
        };
        break;

      default:
        data = {
          error: 'not right type request'
        }
    }
    io.emit('message', {
      type: response.type,
      data: data
    });

  })

  socket.on('disconnect', response => {
    let userId;
    const userIndex = usersArePlaying.findIndex(player => player.connectedId == socket.id);
    if (userIndex > -1) {
      userId = usersArePlaying[userIndex].userId;
      if (userIndex > -1) {
        const tankIndex = tanks.findIndex(tank => tank.player == usersArePlaying[userIndex].userId);
        usersArePlaying.splice(userIndex, 1);
        tanks.splice(tankIndex, 1);
      }
    }

    io.emit('message', {
      type: 'disconnect',
      data: {
        userId: userId
      }
    });
  });

});
