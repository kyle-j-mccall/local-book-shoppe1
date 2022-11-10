const { Router } = require('express');
const { Author } = require('../models/Author');

module.exports = Router()
  .get('/:id', async (req, res) => {
    const { name, dob, pob, books } = await Author.getById(req.params.id);
    const filtered = {
      name,
      dob,
      pob,
      books: books.map(({ id, title, released }) => ({ id, title, released })),
    };
    res.json(filtered);
  })
  .get('/', async (req, res) => {
    const author = await Author.getAll();
    res.json(author);
  });
