docker restart nextjs_prod

DEPLOY_SERVER="35.154.15.237"

echo "Deploying to ${DEPLOY_SERVER}"
ssh root@${DEPLOY_SERVER} 'bash -s' < ./scripts/entry.sh

echo "Finished"
