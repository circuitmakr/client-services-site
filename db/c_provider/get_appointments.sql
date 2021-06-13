SELECT  appointment[1][1], appointment[1][2] ,
 s_date FROM tbl_sessions
WHERE provider_id =$1
ORDER BY s_date;