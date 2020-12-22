const championFilter = require('./scripts/filterChampion');
const champions = require('./scripts/cheerioScrapping');

championFilter('Zyra').then((response) => {
  console.log(response);
});
