#!/bin/bash
set -e

# Ensure we're in the right directory
cd /home/avianage/projects/portfolio-aakash

echo "▶ Pulling latest code..."
git pull origin main

# Extract version from package.json
VERSION=$(node -p "require('./package.json').version")
echo "▶ Building portfolio-aakash v$VERSION..."

docker build \
  -t portfolio-aakash:$VERSION \
  -t portfolio-aakash:latest \
  .

echo "▶ Restarting container..."
# Stop and remove old container silently if it exists
docker stop portfolio-aakash > /dev/null 2>&1 || true
docker rm portfolio-aakash > /dev/null 2>&1 || true

docker run -d -p 3000:3000 --name portfolio-aakash portfolio-aakash:latest

echo "▶ Verifying..."
sleep 3
docker logs portfolio-aakash --tail 20

echo "✅ Deployed v$VERSION on port 3000"
