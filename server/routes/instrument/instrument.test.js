const request = require('supertest');
const app = require('../../app');
const execSync = require('child_process').execSync;
const { encrypt, decrypt } = require("../../utils/helperFunctions");
// const Show = require('../../../models/index');

// jest.mock(Show.Show, () => ({ update: jest.fn() }));
// jest.mock('../../../models/Show', () => ({ belongsToMany: jest.fn() }));
// jest.mock('./models/Restaurant', () => ({ destroy: jest.fn() }));

// PLACEHOLDER for mock data. Runs seed script every time before test to reset
beforeAll(() => {
  const test = execSync('cd server && node seed.js', { encoding: 'utf-8' });
  console.log(test);
});

describe('When we call upon our /items route', () => {
  test('AND we send a get request, all shows are returned', async () => {
    const response = await request(app)
      .get('/instruments');


    expect(response.status).toBe(200);
    expect(response.body).toBeDefined();
  });

  test('AND we send a parameterized get request, 1 item is returned', async () => {
    const response = await request(app)
      .get('/instruments/1');

    // console.log(response.body)
    // console.log(Array(response.body))

    expect(response.status).toBe(200);
    expect(response.body).toBeDefined();
    expect(Array(response.body)).toHaveLength(1);
  });

  test('AND we send a put request, the proper status code is returned and the body is changed as expected', async () => {
    const body = {
      name: "Matriarch Semi-Modular Analog Keyboard Synthesizer",
      brand: "Moog",
      price: "89.00",
      description: "Moog",
      category: "test",
      image: "https://www.perfectcircuit.com/media/catalog/product/cache/b2b71989c0b652d08415263d23f3ddf7/M/o/Moog_Matriarch_01.jpg",
    };

    body.price = encrypt(body.price);

    // Show.Show.update.mockResolvedValue(body, {where : {id : 1}});

    const response = await request(app)
      .put('/instruments/1')
      .send(body);

    const check = await request(app)
      .get('/instruments/1');

    expect(response.status).toBe(200);
    expect(check.body.category).toBe("test");
  });

  test('AND we send a post request with VALID data, it creates', async () => {
    const testItem = {
      name: "Matriarch Semi-Modular Analog Keyboard Synthesizer",
      brand: "Moog",
      price: "89.00",
      description: "Moog",
      category: "test",
      image: "https://www.perfectcircuit.com/media/catalog/product/cache/b2b71989c0b652d08415263d23f3ddf7/M/o/Moog_Matriarch_01.jpg",
    };

    await request(app)
      .post('/instruments')
      .send(testItem)
      .expect(200);
  });

  test('AND we send a post or put request with INVALID data, it throws validation error', async () => {
    const invalidInstrument1 = {
      "name": "test that should absolutely not pass under any circumstance because look at how long this name is. Like who would be putting this much in a title. DM them or something if you really wanna know this, or put it in the description, since you know, thats what its for",
      "price": 10,
      "description": 'test',
      "category": 'test',
      "image": 'test.com'
    };

    const invalidInstrument2 = {
      "name": "",
      "price": 10,
      "description": 'test',
      "category": 'test',
      "image": 'test.com'
    };

    const invalidInstrument3 = {
      "name": "test",
      "price": 10,
      "description": '',
      "category": 'test',
      "image": 'test.com'
    };

    const response1 = await request(app)
      .post('/instruments')
      .send(invalidInstrument1);

    const put1 = await request(app)
      .put('/instruments/1')
      .send(invalidInstrument1);

    const response2 = await request(app)
      .post('/instruments')

    const response3 = await request(app)
      .post('/instruments')
      .send(invalidInstrument3);

    const check = await request(app)
      .get('/instruments');

    expect(response1.body).toHaveProperty('errors');
    expect(put1.body).toHaveProperty('errors');
    expect(response2.body).toHaveProperty('errors');
    expect(response3.body).toHaveProperty('errors');
  });

  test('AND we send a delete request, the proper status code is returned and a get req no longer returns the deleted obj', async () => {
    await request(app)
      .delete('/instruments/1')
      .expect(200);

    const check = request(app)
      .get('/instruments/1');

    expect(check.body).toBeUndefined();
  });
});

// RUN TEST via CLI
// npm test -- server/routes/item/items.test.js