var io = require('socket.io-client');

class Reduser {

  constructor(host) {
    this.socket = io.connect(host || 'http://192.168.0.197:8000');
    this.eventList = {};
  }

  emitMessage(type, data) {
    this.socket.emit(type, data);
  }

  onMessage(response) {
    const listener = this.eventList[response.type];
    if (listener) {
      if (listener(response).one) {
        delete this.eventList[response.type];
      };
    }
  }

  addEventListener(type, callback) {
    this.eventList[type] = callback;
  }

  makeOne(eventType, data) {
    return new Promise((resolve, reject) => {
      const callback = (resolve, reject) => (response) => {
        if (response.error) {
          reject(response);
        }
        resolve(response);
        return {one: true};
      };
      this.eventList[eventType] = callback(resolve, reject);

      this.emitMessage(eventType, data);
    });
  }

  connect() {
    return new Promise((resolve, reject) => {

      this.socket.on('auth', (response) => {
        this.onMessage(response);
      });

      this.socket.on('getTanks', (response) => {
        this.onMessage(response);
      });

      this.socket.on('initTank', (response) => {
        this.onMessage(response);
      });

      this.socket.on('updateTank', (response) => {
        this.onMessage(response);
      });

      this.socket.on('lossUser', (response) => {
        this.onMessage(response);
      });

      this.socket.on('connect', () => {
        // console.info('connect socket id:', this.socket.id);
        resolve(this.socket.id);
      });

      this.socket.on('disconnect', e => {
        console.error(e, 'disconnect socket.id:', this.socket.id);
        reject(e);
      });

    });
  }

}

export default Reduser;
