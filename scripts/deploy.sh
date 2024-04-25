# DEPLOY_SERVER="35.154.15.237"

# ssh -i ./access_key.pem ubuntu@${DEPLOY_SERVER} 'bash -s' < ./scripts/main_script.sh
# echo "Finished"


docker -v

docker build -t bun_docker_next -f docker/prod/Dockerfile .

docker images

docker tag bun_docker_next achyutatp/bun-docker-next:latest

echo ${DOCKER_HUB_TOKEN} | docker login -u achyutatp --password-stdin docker.io

docker push docker.io/achyutatp/bun-docker-next:lates