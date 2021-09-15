const { Pool } = require('pg');

const pool = new Pool({
  user: 'tapansiwach',
  // password: '123',
  host: 'localhost',
  database: 'bootcampx'
});

pool.query(`
SELECT id, name, cohort_id
FROM students
LIMIT 5;
`)
  .then(res => {
    console.log(res.rows);
    console.table(res.rows);
  })
  .catch(err => console.error('query error', err.stack));