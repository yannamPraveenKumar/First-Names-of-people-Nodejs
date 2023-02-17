const names = require("../country/state/city/index.js");
const getFirstNames = require("../utilities/utils/index.js");
const getPeopleInCity = (names) => {
  return getFirstNames(names);
};
module.exports = getPeopleInCity;
