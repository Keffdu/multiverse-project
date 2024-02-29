const express = require("express");
const router = express.Router();

const itemsRouter = require('./item/items');

// different model routers
router.use('/items', itemsRouter);

module.exports = router;
