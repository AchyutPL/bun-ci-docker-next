SERVER_FOLDER=/var/www/html/bun-ci-docker-next

cd ${SERVER_FOLDER} || exit

sudo git fetch --all

sudo git pull