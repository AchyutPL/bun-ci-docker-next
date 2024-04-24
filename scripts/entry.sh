SERVER_FOLDER=/var/www/html/bun-ci-docker-next

cd ${SERVER_FOLDER} || exit
source ~/.bashrc
pwd
eval "$(ssh-agent -s)"
ssh-add ~/.ssh/id_rsa
git fetch --all
git pull