SELECT cohorts.name AS cohort_name, count(students.id) AS total_students
  FROM cohorts JOIN students ON cohorts.id = cohort_id
  GROUP BY cohorts.name
  HAVING count(students.id) >= 18;