INSERT INTO tbl_calendar(
    provider_id,
    cal_date,
    daily_schedule,
    available
  )
VALUES ($1, $2, $3, $4);
SELECT * FROM tbl_calendar
WHERE provider_id = $1



