npm install

npm run build

#need to install aws cli
#needs to login to aws configure
aws s3 cp build s3://magicalnailsmilwaukee.com --recursive
aws s3 cp build s3://www.magicalnailsmilwaukee.com --recursive
