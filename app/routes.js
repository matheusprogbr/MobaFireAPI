const express = require('express');

const routes = express.Router();
const championsNames = require('./scripts/championsNames');

routes.get('/champions', async (req, res) => {
  res.json(await championsNames());
});

module.exports = routes;
