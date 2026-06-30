$ErrorActionPreference = "Stop"
Set-Location $PSScriptRoot

if (-not (Test-Path .git)) { git init -b main }
git add .
git diff --cached --quiet
if ($LASTEXITCODE -ne 0) {
  git commit -m "Initial site for GitHub Pages"
}

$auth = gh auth status 2>&1
if ($LASTEXITCODE -ne 0) {
  Write-Host "gh nie jest zalogowany. Uruchom: gh auth login"
  exit 1
}

$user = gh api user -q .login
$repo = "kaszub-enterprise"

gh repo view $user/$repo 2>$null
if ($LASTEXITCODE -ne 0) {
  gh repo create $repo --public --source=. --remote=origin --push
} else {
  git push -u origin main 2>$null
  if ($LASTEXITCODE -ne 0) { git push -u origin master }
}

gh api repos/$user/$repo/pages -X POST -f build_type=workflow 2>$null

$live = "https://$user.github.io/$repo/"
"LIVE=$live" | Out-File AGENT-DEPLOY-STATUS.txt -Encoding utf8
"REASON=Repo pushed. Wlacz Pages: Settings -> Pages -> GitHub Actions." | Add-Content AGENT-DEPLOY-STATUS.txt
Write-Host "Gotowe: $live"
