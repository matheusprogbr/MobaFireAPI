const cheerioScrapping = require('./cheerioScrapping');

module.exports = async (filterName) => {
  const champions = await cheerioScrapping();
  console.log(filterName);
  const championFilter = champions.find(
    (champion) => filterName.toUpperCase() === champion.name.toUpperCase()
  );
  console.log(championFilter);

  return championFilter;
};
