UPDATE
tbl_answers a
SET score = $1
WHERE a.question_id = $2 AND a.q_date = $3
ORDER BY a.question_id