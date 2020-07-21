const _ = require('underscore');
const express = require('express');

const app = express();

require('dotenv').config();

const configPort = process.env.PORT;
const UsersRouter = require('./src/users.routes');

UsersRouter.routesConfig(app);

if (module === require.main) {
  app.listen(configPort, () => {
    // eslint-disable-next-line no-console
    console.log(`Server is running on port ${configPort}`);
  });
}

module.exports.app = app;
