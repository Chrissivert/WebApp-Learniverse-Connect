@echo off
set SLEEP_TIME=5

docker-compose down
docker-compose up -d

echo Docker compose done.
echo Waiting %SLEEP_TIME% seconds for the database to start...
timeout /t %SLEEP_TIME% /nobreak

docker-compose exec db bash -c "psql -U user1 -d group1database < /sql_scripts/initialize.sql"
docker-compose exec db bash -c "psql -U user1 -d group1database < /sql_scripts/populate.sql"
echo CREATE USER backend_user WITH PASSWORD 'password'; | docker-compose exec -T db psql -U user1 -d group1database
echo GRANT SELECT, UPDATE, INSERT, DELETE ON ALL TABLES IN SCHEMA public TO backend_user; | docker-compose exec -T db psql -U user1 -d group1database
echo GRANT USAGE ON ALL SEQUENCES IN SCHEMA public TO backend_user; | docker-compose exec -T db psql -U user1 -d group1database
