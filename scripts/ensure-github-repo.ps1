# Maakt flowixagents/ComingSoonSnimio aan (als die nog niet bestaat) en pusht main.
$ErrorActionPreference = "Stop"
Set-Location (Join-Path $PSScriptRoot "..")

$credIn = "protocol=https`nhost=github.com`n`n"
$credOut = $credIn | git credential fill 2>$null
if (-not $credOut) { throw "Geen GitHub-credentials. Log in via Git Credential Manager of gh auth login." }

$token = ($credOut | Select-String "^password=(.+)$").Matches.Groups[1].Value
$headers = @{
  Authorization = "Bearer $token"
  Accept        = "application/vnd.github+json"
  "X-GitHub-Api-Version" = "2022-11-28"
}

$repoName = "ComingSoonSnimio"
$org = "flowixagents"
$body = @{
  name        = $repoName
  description = "Snimio coming soon landingspagina (www.snim.io)"
  private     = $false
  has_issues  = $true
} | ConvertTo-Json

try {
  Invoke-RestMethod -Uri "https://api.github.com/repos/$org/$repoName" -Headers $headers -Method Get | Out-Null
  Write-Host "Repo $org/$repoName bestaat al."
} catch {
  Write-Host "Repo aanmaken: $org/$repoName ..."
  try {
    Invoke-RestMethod -Uri "https://api.github.com/orgs/$org/repos" -Headers $headers -Method Post -Body $body -ContentType "application/json"
  } catch {
    Write-Host "Org-repo mislukt, probeer onder user-account..."
    Invoke-RestMethod -Uri "https://api.github.com/user/repos" -Headers $headers -Method Post -Body $body -ContentType "application/json"
  }
}

git remote set-url origin "https://github.com/$org/$repoName.git"
git push -u origin main
Write-Host "Push klaar: https://github.com/$org/$repoName"
