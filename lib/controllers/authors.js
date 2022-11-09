const { Router } = require('express');
const { Author } = require('../models/Author');

module.exports = Router()
  .get('/:id', async (req, res) => {
    const detail = await Author.getById(req.params.id);
    res.json(detail);
  })
  .get('/', async (req, res) => {
    const author = await Author.getAll();
    res.json(author);
  });
