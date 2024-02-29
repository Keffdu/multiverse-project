const express = require("express");
const router = express.Router();

const instrumentsRouter = require('./instrument/instrument');
const usersRouter = require('./user/users');

// different model routers
router.use('/instruments', instrumentsRouter);

module.exports = router;
