const express = require('express');

const routes = express.Router();
const championsNames = require('./scripts/championsNames');
const filterChampion = require('./scripts/filterChampion');

routes.get('/champions', async (req, res) => {
  if (!req.query.filter) res.json(await championsNames());
  return res.json(await filterChampion(req.query.filter));
});

module.exports = routes;
