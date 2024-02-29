const bcrypt = require("bcrypt");

// replace with items later
const { instruments  } = require('./seedData.js');

const { db } = require('./db');
const { Instrument } = require('./models');

const seed = async () => {

  try {
    // drop and recreate tables per model definitions
    await db.sync({ force: true });

    // insert data
    const instrumentArr = await Instrument.bulkCreate(instruments);

    // this just hashes the passwords of the seed users for uniformity between seed data and user data created on client
    // for (const user of users){
    //   user.passwordHash = await bcrypt.hash(user.passwordHash, 10);
    // }

    // const userArr = await User.bulkCreate(users);

    // await userArr[0].setItems(instrumentArr[0]);
    // await userArr[0].setItems(instrumentArr[1]);
    // await instrumentArr[0].setUsers(userArr[0]);
    // await instrumentArr[1].setUsers(userArr[0]);
    // console.log(userArr[0].__proto__);

    console.log("db populated!");
  } catch (error) {
    console.error(error);
  }
};

seed();
