INSERT INTO tbl_client
(username, password, usertype)
VALUES($1, $2, $3) RETURNING *;