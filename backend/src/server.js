const express = require('express');
const server = express();
const routes = require('./routes');
const mongoose = require('mongoose');
const cors = require('cors');
mongoose.connect('mongodb+srv://Daniel:Daniel@cluster0-vpelr.mongodb.net/OmniStack8?retryWrites=true&w=majority',
{
  useNewUrlParser: true
});
server.use(cors());
server.use(express.json());
server.use(routes);
server.listen(3333);
/* foi usado uma extensão yarn add nodemon (criado um script chamado dev:)
* onde é referenciado o server.js como arquivo a ser motor a cada save.
*
*
*/