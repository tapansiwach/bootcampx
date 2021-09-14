SELECT assignments.id as id, 
  day, chapter, name, 
  count(assistance_requests.id) AS total_requests
FROM assistance_requests 
  JOIN assignments ON assignments.id = assignment_id
GROUP BY assignments.id, day, chapter, name
ORDER BY total_requests DESC;