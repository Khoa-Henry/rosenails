$BusinessID = $args[0]
$name = $args[1]
$website = $args[2]
$about = $args[3]
$address = $args[4]
$contactNumber = $args[5]
$hours = $args[6]
$lat = $args[7]
$lng = $args[8]


$currentdir = pwd
Write-Output $currentdir
$setdir = $currentdir -replace '\\powershellScripts', ''
cd $setdir
cd ./powershellScripts

$a = Get-Content '../src/customer.json' -raw | ConvertFrom-Json
Write-Output $a
$a.BusinessID = $BusinessID
$a.name = $name
$a.website = $website
$a.about = $about
$a.address = $address
$a.contactNumber = $contactNumber
$a.hours = $hours
$a.lat = $lat
$a.lng = $lng
Write-Output $a
$a | ConvertTo-Json -depth 32| set-content '../src/customer.json'
$b = Get-Content '../src/customer.json' -raw | ConvertFrom-Json
Write-Output $b
cd $setdir
Write-Output $setdir