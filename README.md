# Hillstories
hillstories.com

- May need to remove ~/.docker/config.json proxies
- client/package.json "proxy": "http://localhost:3001"
- add client/.env.development.local DANGEROUSLY_DISABLE_HOST_CHECK=true
- Have AWS allow custom TCP Rule on 3001
- https://accounts.google.com/DisplayUnlockCaptcha for AWS
- to get new instagram access_token login to instagram and then go to this link
```
https://www.instagram.com/oauth/authorize/?client_id=[INSERT_HERE]&redirect_uri=http://localhost:3000&response_type=token&scope=public_content
```
- to update server
```
ssh -i ../ec2_security_pair.pem ubuntu@public_dns
cd /var/www/Hillstories
yarn build
yarn start:prod &
```
