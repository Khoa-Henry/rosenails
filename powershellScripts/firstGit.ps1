#check if the repo has a git file to begin with.
$fileToCheck = "./.git"
if (Test-Path $fileToCheck)
{
    Write-Output "removing existing .git file"
    rm -r "./.git"
}
else {
    Write-Output "There is no .git file in root."
}