the terraform deploys s3+ cloud front but it will do it on an empty repo..
to make this module work you need to buy the domain in route 53 and setup a ssl cert in amazon certificate manager for www.example.com and example.com www on top
then do dns verification and approve for both domain names

terraform init
terraform plan
terraform apply

this builds the s3 and cloudfront


now you need to upload the app files to s3, run deploytos3.ps1 this installs node packages, builds the app then uploads the built file to s3. You need to install aws cli and run aws configure to setup your login credentials first.
