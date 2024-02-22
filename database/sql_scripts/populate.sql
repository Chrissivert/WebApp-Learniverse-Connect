BEGIN;

INSERT INTO company (company_id, company_name)
VALUES (1, 'Proflex');

INSERT INTO app_user (email, pass_hash, company_id)
VALUES ('admin_proflex@gmail.com', '$argon2id$v=19$m=4096,t=3,p=1$zGDWbzz553WuAOr9wAscPw', 1);

COMMIT;