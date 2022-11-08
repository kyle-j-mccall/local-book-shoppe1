DROP TABLE IF EXISTS authors;
DROP TABLE IF EXISTS books;

CREATE TABLE authors (
  id BIGINT GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
  name VARCHAR,
  dob DATE,
  pob VARCHAR
);

CREATE TABLE books (
  id BIGINT GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
  title VARCHAR,
  released DATE 
);

INSERT INTO authors (
  name,
  dob,
  pob
)

VALUES
  ('Riki Jessopp', '9/1/2022', 'Thailand'),
  ('Alvan Tesyro', '11/15/2021', 'Portugal'),
  ('Rolfe Kob', '11/10/2021', 'Indonesia'),
  ('Sissy Bonn', '2/13/2022', 'Brazil'),
  ('Rayner Alebrooke', '2/15/2022', 'China'),
  ('Marin Abbotts', '1/24/2022', 'Chad'),
  ('Annemarie Wilshire', '1/2/2022', 'Sweden'),
  ('Wolfie Summersett', '3/9/2022', 'Samoa'),
  ('Chlo Voss', '10/15/2022', 'Egypt'),
  ('Stacy Wickman', '6/9/2022', 'Bosnia and Herzegovina');

INSERT INTO books (
  title,
  released
)

VALUES
  ('Business-focused', '8/9/2022'),
  ('Expanded', '10/25/2022'),
  ('Stand-alone', '4/10/2022'),
  ('Phased', '5/8/2022'),
  ('Optional', '10/18/2022'),
  ('Assimilated', '9/9/2022'),
  ('Reverse-engineered', '9/15/2022'),
  ('optimal', '9/26/2022'),
  ('Profit-focused', '10/4/2022'),
  ('Compatible', '7/11/2022');
