const express = require("express");
const instrumentsRouter = express.Router();
const { Instrument } = require("../../models");
const { check, validationResult } = require('express-validator');
const { encrypt, decrypt } = require("../../utils/helperFunctions");
const { requiresAuth } = require('express-openid-connect');

// Auth0 is complete as well. If you use Auth0 instead,
// protect the routes you want proteced like so
// by requiring: const { requiresAuth } = require('express-openid-connect')
// and mounting the middleware in each route like so: ('/', requiresAuth(), (req, res) => { ...

// GET /sauce
instrumentsRouter.get("/", requiresAuth(), async (req, res, next) => {
  try {
    let instruments = await Instrument.findAll();

    // decrypts sample sensitive info
    instruments.forEach((instrument) => instrument.price = decrypt(instrument.price));

    res.send(instruments);
  } catch (error) {
    next(error);
  }
});

instrumentsRouter.get("/:id", requiresAuth(), async (req, res, next) => {
  try {
    const instrument = await Instrument.findByPk(req.params.id);
    instrument.price = decrypt(instrument.price);
    res.send(instrument);
  } catch (error) {
    next(error);
  }
});

instrumentsRouter.post("/",
[check('name').not().isEmpty().trim().isLength({ max: 100 }),
check('price').not().isEmpty().trim(),
check('description').not().isEmpty().trim().isLength({ max: 1500 })],
  async (req, res, next) => {
    const errors = validationResult(req);

    req.body.price = encrypt(req.body.price);

    if(!errors.isEmpty()) {
      res.json({ errors : errors.array() });
    }
    else {
      try{
        const newInstrument = await Instrument.create(req.body);
        res.json(newInstrument);
      }
      catch(error){
        next(error);
      }
    }
  });

instrumentsRouter.put("/:id",
  [check('name').not().isEmpty().trim().isLength({ max: 100 }),
    check('price').not().isEmpty().trim(),
    check('description').not().isEmpty().trim().isLength({ max: 1500 })],
  async (req, res, next) => {
    const errors = validationResult(req);

    if(!errors.isEmpty()) {
      res.json({ errors : errors.array() });
    }
    else {
      try {
        const instrument = await Instrument.findByPk(req.params.id);
        const updatedInstrument = await instrument.update(req.body, { where:{ id: req.params.id } });
        res.json({ message: "updated instrument " + updatedInstrument.name });
      } catch (error) {
        next(error);
      }
    }
  });

instrumentsRouter.delete("/:id", async (req, res, next) => {
  try{
    const instrument = await Instrument.findByPk(req.params.id);
    await instrument.destroy();
    res.json({ message: "Deleted instrument with id: " + req.params.id });
  }
  catch(error){
    next(error);
  }
});

module.exports = instrumentsRouter;
