const pool = require('../lib/utils/pool');
const setup = require('../data/setup');
// const request = require('supertest');
// const app = require('../lib/app');

describe('authors routes', () => {
  beforeEach(() => {
    return setup(pool);
  });
  it.skip('/books should', () => {
    expect(1).toEqual(1);
  });
  afterAll(() => {
    pool.end();
  });
});
