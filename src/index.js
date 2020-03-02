const express = require('express');
const mongoose = require('mongoose');
const routes = require('./routes');
const cors = require('cors')
const http = require('http');
const { setupWebSocket } = require('./websocket');

const app = express();
const server = http.Server(app);

setupWebSocket(server);

mongoose.connect('your link', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
})

app.use(cors({ origin : 'http://127.0.0.1:3000'}));
app.use(express.json());
app.use(routes);

server.listen(3333);