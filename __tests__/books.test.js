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

  it('/books/:id should return book details', async () => {
    const res = await request(app).get('/books/2');
    const expected = {
      title: expect.any(String),
      released: expect.any(String),
      authors: [
        {
          id: expect.any(Number),
          name: expect.any(String),
        },
      ],
    };

    expect(res.body).toEqual(expected);
  });
  afterAll(() => {
    pool.end();
  });
});
