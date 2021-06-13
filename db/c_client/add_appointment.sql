INSERT INTO tbl_sessions
(provider_id, client_id, s_date, appointment)
VALUES
($1,$2,$3,$4);
-- SELECT*FROM tbl_sessions
-- WHERE provider_id = $1 AND client_id=$2