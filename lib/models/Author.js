const pool = require('../utils/pool');

class Author {
  id;
  name;
  dob;
  pob;

  constructor(row) {
    this.id = row.id;
    this.name = row.name;
    this.dob = row.dob;
    this.pob = row.pob;
  }

  static async getAll() {
    const { rows } = await pool.query(`
    select authors.*, 
            coalesce(
              json_agg(to_jsonb(books))
              filter (WHERE books.id IS NOT NULL), '[]') as books
      from authors left join authors_books
        on authors.id = authors_books.author_id
      left join books on books.id = authors_books.book_id
      group by authors.id;`);
    console.log(rows);

    return rows.map((row) => new Author(row));
  }

  static async getById(id) {
    const { rows } = await pool.query(
      `
    select authors.*, 
            coalesce(
              json_agg(to_jsonb(books))
              filter (WHERE books.id IS NOT NULL), '[]') as books
      from authors left join authors_books
        on authors.id = authors_books.author_id
      left join books on books.id = authors_books.book_id
      where books.id = $1
      group by authors.id;`,
      [id]
    );

    return new Author(rows[0]);
  }
}

module.exports = { Author };
