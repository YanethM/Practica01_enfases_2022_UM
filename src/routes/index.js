const express = require('express');
const superheroeRoute = require('./superheroes.routes');

/* Router() permite acceder a: POST, PUT, DELETE, GET, GET{:id} */
function routerApi(app) {
  const router = express.Router();
  app.use('/api/v1', router);
  router.use('/superheroes', superheroeRoute);
}

module.exports = routerApi;
