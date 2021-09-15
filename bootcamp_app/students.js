const { Pool } = require('pg');

const pool = new Pool({
  user: 'tapansiwach',
  // password: '123',
  host: 'localhost',
  database: 'bootcampx'
});

const args = process.argv.slice(2);
const cohortName = `%${args[0]}%`;
const limit = args[1] || 5;

pool.query(`
SELECT students.id as student_id, students.name as name, cohorts.name as cohort
FROM students
JOIN cohorts ON cohorts.id = cohort_id
WHERE cohorts.name LIKE $1
LIMIT $2;
`, [cohortName, limit])
  .then(res => {
    // console.log(res.rows);
    // console.table(res.rows);
    res.rows.forEach(user => {
      console.log(`${user.name} has an id of ${user.student_id} and was in the ${user.cohort} cohort`);
    })
  });