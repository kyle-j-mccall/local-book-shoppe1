const pool = require('../lib/utils/pool');
const setup = require('../data/setup');
const request = require('supertest');
const app = require('../lib/app');

describe('book routes', () => {
  beforeEach(() => {
    return setup(pool);
  });
  it('/books should return a list of books', async () => {
    const res = await request(app).get('/books');
    const phased = res.body.find((char) => char.id === '4');
    expect(phased).toHaveProperty('title', 'Phased');
    expect(phased).toHaveProperty('released', '2022-05-08T07:00:00.000Z');
  });
  afterAll(() => {
    pool.end();
  });
});
