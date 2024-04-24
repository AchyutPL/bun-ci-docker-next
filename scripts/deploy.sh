DEPLOY_SERVER="35.154.15.237"

echo "Deploying to ${SSH_PRIVATE_KEY}"
ssh -i ./key.pem root@${DEPLOY_SERVER} 'bash -s' < ./scripts/main_script.sh
echo "Finished"
