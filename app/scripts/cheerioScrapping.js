const cheerio = require('cheerio');
const fetchData = require('./fetchData');

const url = 'https://www.mobafire.com/league-of-legends/champions';
const prefixURl = 'https://www.mobafire.com';
module.exports = async () => {
  const pageHTML = await fetchData(url);
  const $ = cheerio.load(pageHTML.data);

  const filterHTML = '#content .champ-list--details .champ-list__item';
  const championsDetails = [];
  $(filterHTML).each((i, e) => {
    const name = $(e).find('.champ-list__item__name b').text();
    const nameTitle = $(e).find('.champ-list__item__name span').text();
    const linkBuild = `${prefixURl}${$(e).attr('href')}`;
    const roleImg = `${prefixURl}${$(e)
      .find('.champ-list__item__role img')
      .attr('src')}`;
    const role = $(e).find('.champ-list__item__role span').text();
    const roleWinRate = $(e).find('.champ-list__item__role i').text();
    const rolePickRate = $(e).find('.champ-list__item__role > b').text();

    // console.log(
    //   `Campeão:${name}Link para ver as Builds: ${linkBuild}\nRole:${roleImg}\n${role}\nWin Rate e Pick Rate:${roleWinRate} e ${rolePickRate}`
    // );
    const championDetails = {
      name,
      nameTitle,
      linkBuild,
      roleImg,
      role,
      roleWinRate,
      rolePickRate,
    };

    championsDetails.push(championDetails);
  });
  return championsDetails;
};
