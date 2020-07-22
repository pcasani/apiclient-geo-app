const _ = require('underscore');
const UsersData = require('../controllers/users.controller');

require('dotenv').config();

const city = process.env.CITY;
const distance = process.env.DISTANCE_FROM_CITY;

exports.routesConfig = (app) => {
  app.get(`/v1/users/${city}`, async (req, res) => {
    try {
      const usersFromCity = await UsersData.getUsersFromCity(city);
      const usersNearLocation = await UsersData.getUsersNearLocation(city, distance);
      const usersDistinct = _.union(usersFromCity, usersNearLocation);
      return await res.json(usersDistinct);
    } catch (error) {
      res.status(error.response.status);
      return res.send(error.message);
    }
  });
};
