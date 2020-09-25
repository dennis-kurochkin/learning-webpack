const EventEmitter = require('events');

// const emitter = new EventEmitter();

// emitter.on('anything', data => {
//   console.log(data);
// })

// emitter.emit('anything', {a: 1});

class Dispatcher extends EventEmitter {
  subscribe(eventName, callback) {
    console.log('Subscribe');
    this.on(eventName, callback);
  }

  dispatch(eventName, data) {
    console.log('Dispatch');
    this.emit(eventName, data);
  }
}

const dis = new Dispatcher;

dis.subscribe('aa', data => {
  console.log('ON: aa', data);
});

dis.dispatch('aa', { a: 2, b: 3 });