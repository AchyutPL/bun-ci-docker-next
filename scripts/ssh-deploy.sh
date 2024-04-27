tar -xzf ~/webapp/webapp.tar.gz -C ~/webapp/ && rm -f ~/webapp/webapp.tar.gz

cd webapp 

docker compose -f docker/prod/docker-compose.yml build

docker container rm -f lancon-webapp || true

docker image prune -f

docker compose -f docker/prod/docker-compose.yml up -d