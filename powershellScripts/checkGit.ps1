$businessID = $args[0]

#This script checks if the newly cloned repo has a .git folder. If it does then it copies it to root. If it doesn't it does a git init to create one.
$fileToCheck = "./$businessID.com/.git"
Write-Output $fileToCheck
if (Test-Path $fileToCheck)
{
    Write-output "Git file found in clone. Copying git file and removing clone folder"
    cp -r "./$businessID.com/.git" "./.git"
    rm -r "./$businessID.com"
}
else{
    Write-output "No git file found after pulling. Doing git init"
    git init
    rm -r "./$businessID.com"
}