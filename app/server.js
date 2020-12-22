require('dotenv').config();
const express = require('express');
const routes = require('./routes');
const championFilter = require('./scripts/filterChampion');
const champions = require('./scripts/cheerioScrapping');

const server = express();
server.use(routes);

championFilter('Zyra').then((response) => {
  console.log(response);
});

server.listen(process.env.PORT, () => {
  console.log(`Server is running on port:${process.env.PORT}`);
});
