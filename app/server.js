require('dotenv').config();
const express = require('express');
const routes = require('./routes');

const server = express();
server.use(routes);

server.listen(process.env.PORT, () => {
  console.log(`Server is running on port:${process.env.PORT}`);
});
