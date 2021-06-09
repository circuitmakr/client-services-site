INSERT INTO tbl_assignments(
    client_id,
    provider_id,
    assignments
  )
VALUES ($1, $2, $3);
SELECT*FROM tbl_assignments
WHERE client_id = $1 AND provider_id =$2;