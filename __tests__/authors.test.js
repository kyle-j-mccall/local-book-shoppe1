const pool = require('../lib/utils/pool');
const setup = require('../data/setup');
const request = require('supertest');
const app = require('../lib/app');

describe('author routes', () => {
  beforeEach(() => {
    return setup(pool);
  });
  it('/authors should return a list of authors', async () => {
    const res = await request(app).get('/authors');
    const sissy = res.body.find((char) => char.id === '4');
    expect(sissy).toHaveProperty('name', 'Sissy Bonn');
    expect(sissy).toHaveProperty('pob', 'Brazil');
  });

  it('/authors/:id should return book details', async () => {
    const res = await request(app).get('/authors/4');
    const expected = {
      name: expect.any(String),
      dob: expect.any(String),
      pob: expect.any(String),
      books: [
        {
          id: 6,
          title: expect.any(String),
          released: expect.any(String),
        },
      ],
    };

    expect(res.body).toEqual(expected);
  });

  afterAll(() => {
    pool.end();
  });
});
