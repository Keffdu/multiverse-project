// load environment variables from .env or elsewhere
require('dotenv').config();
const express = require('express');
const app = express();
const morgan = require('morgan');
const path = require('path');
const cors = require('cors');
const envConfig = require('./utils/config');


const { auth } = require('express-openid-connect');
const { requiresAuth } = require('express-openid-connect');

const config = {
  authRequired: false,
  auth0Logout: true,
  secret: envConfig.SECRET,
  baseURL: 'http://localhost:3000',
  clientID: envConfig.CLIENT_ID,
  issuerBaseURL: envConfig.ISSUER_BASE_URL
};

// auth router attaches /login, /logout, and /callback routes to the baseURL
// must be mounted before any routes
app.use(auth(config));

// req.isAuthenticated is provided from the auth router
// this doesn't need to be at the base url level, but will be for now
app.get('/', (req, res) => {
  res.send(req.oidc.isAuthenticated() ? 'Auth0: Logged in' : 'Auth0: Logged out');
});

// fetches auth0 user object
app.get('/profile', requiresAuth(), (req, res) => {
  const profile = req.oidc.user;
  res.send(profile);
});

//Allow CORS requests
app.use(cors());
// logging middleware
app.use(morgan('dev'));
// parsing middleware for form input data & json
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

// serve up static files (e.g. html and css files)
app.use(express.static(path.join(__dirname, '../dist')));

// api router
app.use('/', require('./routes'));

// 404 handler
app.use((req, res) => {
  res.status(404).send({ error: '404 - Not Found', message: 'No route found for the requested URL' });
});

// error handling middleware
// eslint-disable-next-line no-unused-vars
app.use((error, req, res, next) => {
  console.error('SERVER ERROR: ', error);
  if(res.statusCode < 400) res.status(500);
  res.send({ error: error.message, name: error.name, message: error.message, table: error.table });
});

module.exports = app;


