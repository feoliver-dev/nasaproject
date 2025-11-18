const { getAllPlanets } = require('../../models/planets.model');

function httpGetAllPlanets(req, res) {
  // Logic to get all planets
  return res.status(200).json(getAllPlanets());
} 

module.exports = {
  httpGetAllPlanets,
};