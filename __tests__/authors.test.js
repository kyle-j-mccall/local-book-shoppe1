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
    const res = await request(app).get('/authors/1');
    const expected = {
      id: '1',
      name: 'Riki Jessopp',
      dob: '2022-09-01T07:00:00.000Z',
      pob: 'Thailand',
    };

    expect(res.body).toEqual(expected);
  });

  afterAll(() => {
    pool.end();
  });
});
