const cheerioScrapping = require('./cheerioScrapping');

module.exports = async () => {
  const champions = await cheerioScrapping();

  const championsName = champions.map((champion) => champion.name);
  return championsName;
};
