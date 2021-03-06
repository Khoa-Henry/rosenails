npm install

npm run build

#need to install aws cli
#needs to login to aws configure
aws s3 cp build s3://magicalnailsmilwaukee.com --recursive
aws s3 cp build s3://www.magicalnailsmilwaukee.com --recursive

$listObject = aws cloudfront list-distributions --output text --query "DistributionList.Items[].{DistributionId: Id, OriginDomainName: Origins.Items[0].DomainName}[?contains(OriginDomainName, 'magicalnailsmilwaukee.com'||'www.magicalnailsmilwaukee.com')]"

For ($i=0; $i -lt $listObject.length; $i++) {
    if($listObject[$i]-match '^\S*'){
        aws cloudfront create-invalidation --distribution-id $Matches[0] --paths "/*"
    }
    }