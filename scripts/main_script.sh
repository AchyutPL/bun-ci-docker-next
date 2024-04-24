SERVER_FOLDER=/var/www/html/bun-ci-docker-next

cd ${SERVER_FOLDER} || exit

pwd 

git fetch --all

git pull