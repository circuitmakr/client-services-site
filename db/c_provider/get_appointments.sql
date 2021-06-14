SELECT  appointment[1][1],
 s_date, appointment[1][2]  FROM tbl_sessions
WHERE provider_id =$1
ORDER BY s_date;