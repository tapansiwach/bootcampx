SELECT  name, sum(duration) AS total_duration
  FROM students LEFT JOIN assignment_submissions ON students.id = student_id
  WHERE name = 'Ibrahim Schimmel'
  GROUP BY name;