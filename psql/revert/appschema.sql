-- Revert cancer-trials:appschema from pg

BEGIN;

DROP SCHEMA cancer_trials;

COMMIT;
