DEPLOY_SERVER="35.154.15.237"

ssh -i ./access_key.pem ubuntu@${DEPLOY_SERVER} 'bash -s' < ./scripts/main_script.sh
sudo su
echo "Finished"
