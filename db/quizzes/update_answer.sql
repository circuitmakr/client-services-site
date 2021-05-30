UPDATE
tbl_answers a
SET score = $1
WHERE a.question_id = $2 AND a.q_date = $3 a.client_id = $4
ORDER BY a.question_id