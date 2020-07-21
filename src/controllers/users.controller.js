const axios = require('axios');
// eslint-disable-next-line import/no-extraneous-dependencies
const geolib = require('geolib');

require('dotenv').config();

const apiUrl = process.env.API_URL;

const getAllUsers = async () => new Promise((resolve, reject) => {
  axios.get(`${apiUrl}/users`)
    .then((response) => {
      resolve(response.data);
    })
    .catch((error) => {
      reject(error);
    });
});

const getDistance = async (from, to) => {
  const distanceInMetres = geolib.getDistance(from, to);
  return geolib.convertDistance(distanceInMetres, 'mi');
};

const getUsersFromCity = async (city) => new Promise((resolve, reject) => {
  axios.get(`${apiUrl}/city/${city}/users`)
    .then((response) => {
      resolve(response.data);
    })
    .catch((error) => {
      reject(error);
    });
});

let getUsersNearLocation;
// eslint-disable-next-line prefer-const
getUsersNearLocation = async (location, radius) => {
  const users = await getAllUsers();
  const usersMatched = [];

  // eslint-disable-next-line no-restricted-syntax
  for (const user of users) {
    // eslint-disable-next-line no-await-in-loop
    const between = await getDistance(location, user);
    if (between <= radius) {
      usersMatched.push(user);
    }
  }

  return new Promise((resolve) => {
    resolve(usersMatched);
  });
};

module.exports = {
  getUsersFromCity,
  getUsersNearLocation,
};
