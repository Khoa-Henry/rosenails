#need to install aws cli 
#needs to login to aws configure
#take in variable paramter to replace smallneighborhood.com
$domainname = $args[0]

$wwwdomainname = "www."+ $domainname

write-output $domainname
write-output $wwwdomainname

aws s3 cp build s3://$domainname --recursive
aws s3 cp build s3://$wwwdomainname --recursive

# powershell.exe ./powershellscripts/deploytoS3.ps1
