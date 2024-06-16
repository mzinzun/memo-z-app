# memo-z-app

rsync -avz --exclude 'node_modules' --exclude '.git' --exclude '.env' -e "ssh -i ~/Documents/aws-memo/memoz-app-calif-macbook.pem" . ubuntu@ec2-13-52-104-92.us-west-1.compute.amazonaws.com:~/app
