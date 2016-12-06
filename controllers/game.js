const _ = require('underscore');
const usersArePlaying = [];
const tanks = [];

exports.auth = (response, socket) => {

  if (!socket.request.user.logged_in) {
    return false;
  } else {

    const userId = socket.request.user.profile.name;

    const userIndex = usersArePlaying.findIndex(user => user.userId == userId);
    if (userIndex > -1) {
      usersArePlaying[userIndex].connectedId = socket.id;
    } else {
      usersArePlaying.push({userId: userId, connectedId: socket.id});
    }

    return userId;
  }
}

exports.disconnect = socket => {
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

  return userId;
}

exports.getTanks = () => {
  return tanks;
}

exports.updateTank = response => {
  tanks.forEach((tank, index, tanksArray) => {
    if (tank.player === response.tank.player) {
      tanksArray[index] = _.extend(tanksArray[index], response.tank);
    }
  });
  return true;
}

exports.initTank = response => {
  let userTank = tanks.find(tank => {
    return response.userId == tank.player
  });
  if (userTank === undefined) {
    tanks.push(response.tank);
  } else {
    tanks.forEach((tank, index, tanksArray) => {
      if (tank.player == response.userId) {
        tanksArray[index] = response.tank
      }
    });
  }
  return true;
}
