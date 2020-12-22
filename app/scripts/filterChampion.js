const cheerioScrapping = require('./cheerioScrapping');

module.exports = async (filterName) => {
  const champions = await cheerioScrapping();
  const championFilter = champions.find((champion) => {
    if (filterName === champion.name) return champion;
  });

  return championFilter;
};
