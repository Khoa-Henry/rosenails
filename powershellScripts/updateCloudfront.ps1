#Create an object by querying the list of distributions by domain name. Include the two addresses, i.e www.example.com or example.com this can be passed later
#take in variable parameter to replace smallneighborhood.com and www.smallneighborhood.com

$domainname = $args[0]

$wwwdomainname = "www."+ $domainname


$listObject = aws cloudfront list-distributions --output text --query "DistributionList.Items[].{DistributionId: Id, OriginDomainName: Origins.Items[0].DomainName}[?contains(OriginDomainName, '$domainname'||'$wwwdomainname')]"

For ($i=0; $i -lt $listObject.length; $i++) {
    if($listObject[$i]-match '^\S*'){
        aws cloudfront create-invalidation --distribution-id $Matches[0] --paths "/*"
    }
    }