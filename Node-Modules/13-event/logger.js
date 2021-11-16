const EventEmitter = require('events');

//EvenEmitter는 한번 이벤트를 만들면 그 객체 내에서 발생하는 이벤트에 한해 들을 수 있다.
//여러가지 Emitter 객체를 만들면 서로 다른 객체에서 들을 수 없다

class Logger extends EventEmitter {
  log(callback) {
    this.emit('log', 'started...');
    callback();
    this.emit('log', 'ended!');
  }
}

module.exports.Logger = Logger;
