const { db, DataTypes } = require('../db');

const Instrument = db.define("instruments", {
  name: DataTypes.STRING,
  brand: DataTypes.STRING,
  price: DataTypes.STRING,
  description: DataTypes.STRING,
  category: DataTypes.STRING,
  image: DataTypes.STRING,
});

module.exports = Instrument;