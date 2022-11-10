const { Router } = require('express');
const { Book } = require('../models/Book');

module.exports = Router()
  .get('/:id', async (req, res) => {
    const { title, released, authors } = await Book.getById(req.params.id);
    const filtered = {
      title,
      released,
      authors: authors.map(({ id, name }) => ({ id, name })),
    };
    res.json(filtered);
  })
  .get('/', async (req, res) => {
    const books = await Book.getAll();
    res.json(books);
  });
