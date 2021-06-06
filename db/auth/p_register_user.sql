INSERT INTO tbl_provider
(username, password, usertype)
VALUES($1, $2, $3) RETURNING *;