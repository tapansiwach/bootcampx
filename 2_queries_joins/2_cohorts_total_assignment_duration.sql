SELECT cohorts.name AS cohort_name, sum(duration) AS total_duration
  FROM cohorts 
    JOIN students ON cohorts.id = cohort_id
    JOIN assignment_submissions ON students.id = student_id
  WHERE cohorts.name = 'FEB12'
  GROUP BY cohort_name;