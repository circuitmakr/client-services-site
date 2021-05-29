SELECT a.q_date, q.question_type, SUM(a.score) as TOTAL 
FROM tbl_answers a
JOIN tbl_questions q ON a.question_id = q.question_id
WHERE client_id = $1
GROUP BY question_type,  q_date, client_id
ORDER BY q_date;