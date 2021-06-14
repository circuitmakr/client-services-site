SELECT c.name, appointment[1][1], appointment[1][2], s_date
FROM tbl_sessions s
JOIN tbl_client c ON c.client_id = s.client_id
WHERE provider_id = $1
ORDER BY s_date;