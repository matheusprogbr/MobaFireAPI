const express = require('express');

const routes = express.Router();
const championsNames = require('./scripts/championsNames');
const filterChampion = require('./scripts/filterChampion');

routes.get('/champions', async (req, res) => {
  if (!req.query.filter) return res.json(await championsNames());
  const championFiltered = await filterChampion(req.query.filter);
  console.log(championFiltered + typeof championFiltered);
  const champJSON = JSON.stringify(championFiltered);
  return res.json(champJSON);
});

module.exports = routes;
