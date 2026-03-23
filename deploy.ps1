$ErrorActionPreference = "Stop"

# Ensure we're in the script directory
Set-Location -Path $PSScriptRoot

Write-Host "▶ Pulling latest code..." -ForegroundColor Cyan
git pull origin main

# Extract version from package.json
$VERSION = node -p "require('./package.json').version"
Write-Host "▶ Building portfolio-aakash v$VERSION..." -ForegroundColor Cyan

docker build -t portfolio-aakash:$VERSION -t portfolio-aakash:latest .

Write-Host "▶ Restarting container..." -ForegroundColor Cyan
# Stop and remove old container
$RunningContainer = docker ps -q -f name="portfolio-aakash-container"
if ($RunningContainer) { docker stop portfolio-aakash-container > $null }
$ExistingContainer = docker ps -aq -f name="portfolio-aakash-container"
if ($ExistingContainer) { docker rm portfolio-aakash-container > $null }

docker run -d -p 3000:3000 --name portfolio-aakash-container portfolio-aakash:latest

Write-Host "▶ Verifying..." -ForegroundColor Cyan
Start-Sleep -Seconds 3
docker logs portfolio-aakash-container --tail 20

Write-Host "✅ Deployed v$VERSION on port 3000" -ForegroundColor Green
