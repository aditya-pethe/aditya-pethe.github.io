#!/usr/bin/env bash
set -ex 

REPO="aditya-pethe/aditya-pethe.github.io"
DOMAIN="adityapethe.com"

# Get current config
gh api "repos/$REPO/pages"  --jq '{url, cname, https_enforced, status: .html_url}'


# Add ur domain bro
gh api --method PUT "repos/$REPO/pages" -f cname="$DOMAIN"

# Check ur records
dig +short "www.$DOMAIN" CNAME

echo "See if it works"
echo "gh api repos/$REPO/pages --jq '{url, cname, https_enforced, status: .html_url, https_certificate}'"
