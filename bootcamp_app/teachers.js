const { Pool } = require('pg');

const pool = new Pool({
  user: 'tapansiwach',
  // password: '123',
  host: 'localhost',
  database: 'bootcampx'
});

const args = process.argv.slice(2);
console.log(args[0], typeof args[0]);

pool.query(`
SELECT DISTINCT teachers.name as teacher,
  cohorts.name as cohort
FROM assistance_requests
  JOIN teachers ON teachers.id = teacher_id
  JOIN students ON students.id = student_id
  JOIN cohorts ON cohorts.id = cohort_id
WHERE cohorts.name = $1
ORDER BY teachers.name;
`, args)
  .then(res => {
    // console.log(res.rows);
    // console.table(res.rows);
    res.rows.forEach(row => {
      console.log(`${row.cohort}: ${row.teacher}`);
    })
  });