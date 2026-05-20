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

$fullName = "$org/$repoName"
try {
  $existing = Invoke-RestMethod -Uri "https://api.github.com/repos/$fullName" -Headers $headers -Method Get
  Write-Host "Repo $fullName bestaat al."
} catch {
  Write-Host "Repo aanmaken: $org/$repoName ..."
  try {
    $created = Invoke-RestMethod -Uri "https://api.github.com/orgs/$org/repos" -Headers $headers -Method Post -Body $body -ContentType "application/json"
    $fullName = $created.full_name
  } catch {
    Write-Host "Org-repo mislukt (geen rechten op flowixagents?) — onder jouw account:"
    $created = Invoke-RestMethod -Uri "https://api.github.com/user/repos" -Headers $headers -Method Post -Body $body -ContentType "application/json"
    $fullName = $created.full_name
  }
}

$remoteUrl = "https://github.com/$fullName.git"
git remote set-url origin $remoteUrl
git push -u origin main
Write-Host "Push klaar: https://github.com/$fullName"
Write-Host "Pages: Settings -> Pages -> GitHub Actions (workflow deploy-pages.yml)"
