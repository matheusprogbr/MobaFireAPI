const axios = require('axios');

module.exports = async (url) => {
  const pageHTML = await axios.get(url);
  return pageHTML;
};
