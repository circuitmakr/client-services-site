UPDATE tbl_calendar
SET $3 = $4
WHERE cal_date = $2 AND provider_id = $1;
SELECT*FROM tbl_calendar
WHERE cal_date = $2 AND provider_id = $1;
ORDER BY cal_date;