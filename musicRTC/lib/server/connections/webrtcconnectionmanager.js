'use strict';

const ConnectionManager = require('./connectionmanager');
const WebRtcConnection = require('./webrtcconnection');

class WebRtcConnectionManager {
  constructor(options = {}) {
    options = {
      Connection: WebRtcConnection,
      ...options
    };

    const connectionManager = new ConnectionManager(options);

    this.createConnection = async (key,user) => {
      const connection = connectionManager.createConnection(key,user);
      console.log("===8==>");
      await connection.doOffer();
      console.log("===9==>");
      return connection;
    };

    this.getConnection = id => {
      return connectionManager.getConnection(id);
    };

    this.getConnections = () => {
      return connectionManager.getConnections();
    };
  }

  toJSON() {
    return this.getConnections().map(connection => connection.toJSON());
  }
}

WebRtcConnectionManager.create = function create(options) {
  return new WebRtcConnectionManager({
    Connection: function(id,key, user) {
      return new WebRtcConnection(id,key, user, options);
    }
  });
};

module.exports = WebRtcConnectionManager;
