SELECT
cal_date,
available,daily_schedule
FROM tbl_calendar
WHERE provider_id = $1
ORDER BY cal_date