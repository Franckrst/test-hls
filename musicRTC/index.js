'use strict';

const bodyParser = require('body-parser');
const express = require('express');
const { readFileSync } = require('fs');
var jwt = require('express-jwt');
const { mount } = require('./lib/server/rest/connectionsapi');
const WebRtcConnectionManager = require('./lib/server/connections/webrtcconnectionmanager');

const app = express();
app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*"); // update to match the domain you will make the request from
  res.header("Access-Control-Allow-Methods", "DELETE, POST, GET, OPTIONS");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept, Authorization, X-key");
  next();
});
app.use(jwt({ secret: readFileSync(process.env.PWD + '/jwt/private.key', 'utf8'),"algorithms": ["RS256"]}));
app.use(bodyParser.json());

const recordController = require('./back/server.js');


const connectionManager = WebRtcConnectionManager.create(recordController);
mount(app, connectionManager, ``);

const server = app.listen(3001, () => {
  const address = server.address();
  console.log(`http://localhost:${address.port}\n`);

  server.once('close', () => {
    connectionManager.close();
  });
});
