'use strict';

const EventEmitter = require('events');

class Connection extends EventEmitter {
  constructor(id,key,user) {
    super();
    this.id = id;
    this.state = 'open';
    this.key = key;
    this.user = user;
  }

  close() {
    this.state = 'closed';
    this.emit('closed');
  }

  toJSON() {
    return {
      id: this.id,
      state: this.state
    };
  }
}

module.exports = Connection;
