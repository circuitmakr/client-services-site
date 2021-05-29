DELETE FROM tbl_client_to_provider
WHERE client_id = $1 AND provider_id = $2;
SELECT*FROM tbl_client_to_provider
WHERE client_id = $1
ORDER BY provider_id;
