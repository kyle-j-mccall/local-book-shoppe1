const { Router } = require('express');
const { Book } = require('../models/Book');

module.exports = Router()
  .get('/:id', async (req, res) => {
    const detail = await Book.getById(req.params.id);
    console.log(detail);
    res.json(detail);
  })
  .get('/', async (req, res) => {
    const books = await Book.getAll();
    res.json(books);
  });
