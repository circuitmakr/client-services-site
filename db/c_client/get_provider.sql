SELECT*
FROM tbl_provider
WHERE gender = $1 OR primary_service = $2
Order BY name;