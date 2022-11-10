const pool = require('../utils/pool');

class Book {
  id;
  title;
  released;

  constructor(row) {
    this.id = row.id;
    this.title = row.title;
    this.released = row.released;
    this.authors = row.authors;
  }

  static async getAll() {
    const { rows } = await pool.query('SELECT * FROM books');
    return rows.map((row) => new Book(row));
  }

  static async getById(id) {
    const { rows } = await pool.query(
      `
    select books.*, 
            coalesce(
              json_agg(to_jsonb(authors))
              filter (WHERE authors.id IS NOT NULL), '[]') as authors
      from books 
      left join authors_books
        on books.id = authors_books.book_id
      left join authors 
        on authors.id = authors_books.book_id
      where books.id = $1
      group by books.id;
      `,
      [id]
    );

    return new Book(rows[0]);
  }
}

module.exports = { Book };
