-- Verify cancer-trials:appschema on pg

BEGIN;

SELECT pg_catalog.has_schema_privilege('cancer_trials', 'usage');

ROLLBACK;
