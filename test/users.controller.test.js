// eslint-disable-next-line import/no-extraneous-dependencies
const { expect} = require('chai');

// eslint-disable-next-line no-unused-vars
const { describe, it } = require('mocha');

const nock = require('nock');

const usersControllerTest = require('../src/controllers/users.controller');

require('dotenv').config();

const apiUrl = process.env.API_URL;
const city = process.env.CITY;
const distance = process.env.DISTANCE_FROM_CITY;

// eslint-disable-next-line import/no-dynamic-require
const mockedUsers = require(`${__dirname}/data/users`);
// eslint-disable-next-line import/no-dynamic-require
const cityLondon = require(`${__dirname}/data/londonUsers`);

// eslint-disable-next-line no-undef
describe('getUsers', () => {
  // eslint-disable-next-line no-undef
  it('Should return object array of users', async () => {
    nock(apiUrl)
      .get('/users')
      .reply(200, mockedUsers);
    const response = await usersControllerTest.getAllUsers();
    expect(response).to.eql(mockedUsers);
    expect(Array.isArray(response));
  });
});

describe('getUsersFromCity', () => {
  it(
    'Should return object array of users within a radius from the city',
    async () => {
      nock(apiUrl)
        .get('/city/London/users')
        .reply(200, cityLondon);
      const response = await usersControllerTest.getUsersFromCity(city);
      expect(response).to.eql(cityLondon);
      expect(Array.isArray(response));
    },
  );
});

describe('getUsersNearLocation', () => {
  it(
    'Should return object array of users within a radius of the city',
    async () => {
      nock(apiUrl)
        .get('/users')
        .reply(200, mockedUsers);
      const response = await usersControllerTest.getUsersNearLocation(city, distance);
      expect(response);
      expect(Array.isArray(response));
    },
  );
});
