const UsersData = require('./controllers/users.controller');

require('dotenv').config();

const city = process.env.CITY;
const distance = process.env.DISTANCE_FROM_CITY;

exports.routesConfig = (app) => {

    app.get('/v1/users/london', async (req, res) => {

    });

};
