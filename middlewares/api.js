const express = require('express');
const apiRouterMiddlewere = express.Router();

const cntrlApi = require('../controllers/api');

apiRouterMiddlewere.get('/test-reuest', cntrlApi.getTestReuest);

module.exports = apiRouterMiddlewere;
