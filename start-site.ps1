# Lokaal preview — http://localhost:5176
$ErrorActionPreference = "Stop"
Set-Location $PSScriptRoot
Set-Location site
Write-Host "Snimio Coming Soon — http://localhost:5176" -ForegroundColor Cyan
npx --yes serve . -l 5176
