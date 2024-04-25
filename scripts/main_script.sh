# Define the folder where your server code is located
# SERVER_FOLDER=/var/www/html/bun-ci-docker-next

# Change directory to the server folder or exit if it fails
# cd ${SERVER_FOLDER} || exit

# Fetch all changes from the remote repository
# sudo git fetch --all

# Pull the latest changes from the remote repository
# sudo git pull

# Rebuild the Docker image with the latest changes
# Make sure your Docker image name matches your Dockerfile
# Assuming your Dockerfile is in the current directory
# sudo docker compose -f docker/prod/docker-compose.yml up -d --build

# Restart the Docker container with the updated image
# Make sure your Docker container name matches "nextjs_prod"
# sudo docker-compose restart nextjs_prod


sudp docker pull achyutatp/bun-docker-next:latest

sudo docker run -d -p 3000:3000 achyutatp/bun-docker-next:latest
