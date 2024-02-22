BEGIN;

CREATE TABLE company (
    company_id SERIAL PRIMARY KEY,
    company_name TEXT NOT NULL
);

CREATE TABLE app_user (
    email TEXT NOT NULL,
    pass_hash TEXT NOT NULL,
    company_id INT NOT NULL
);

COMMIT;