@echo off
set SLEEP_TIME=2

docker-compose down
docker-compose up -d

echo Docker compose done.
echo Waiting %SLEEP_TIME% seconds for the database to start...
timeout /t %SLEEP_TIME% /nobreak

docker-compose exec db bash -c "mysql -u user1 -ppassword1 group1database < /sql_scripts/initialize.sql"
docker-compose exec db bash -c "mysql -u user1 -ppassword1 group1database < /sql_scripts/populate.sql"
docker-compose exec db bash -c "mysql -u user1 -ppassword1 -e 'CREATE USER IF NOT EXISTS backend_user IDENTIFIED BY ''password'';' group1database"
docker-compose exec db bash -c "mysql -u user1 -ppassword1 -e 'GRANT SELECT, UPDATE, INSERT, DELETE ON group1database.* TO ''backend_user'';'"
docker-compose exec db bash -c "mysql -u user1 -ppassword1 -e 'FLUSH PRIVILEGES;'"
