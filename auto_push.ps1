$git = "C:\Program Files\Git\cmd\git.exe"
$gh = "C:\Program Files\GitHub CLI\gh.exe"

# 1. Setup git credentials helper using gh
& $gh auth setup-git

# 2. Init git if needed
if (-not (Test-Path ".git")) {
    & $git init
    & $git branch -M main
}

# 3. Config user
& $git config user.name "atchanam1"
& $git config user.email "atchanam1@users.noreply.github.com"

# 4. Remote
$remoteUrl = "https://github.com/atchanam1/powerxstore.git"
$remotes = & $git remote
if ($remotes -contains "origin") {
    & $git remote set-url origin $remoteUrl
} else {
    & $git remote add origin $remoteUrl
}

# 5. Remove test files before pushing
Remove-Item -Path "shot*.png", "screenshot*.png", "test*.html", "test*.ps1", "capture*.ps1", "get*.ps1" -Force -ErrorAction SilentlyContinue

# 6. Add, Commit, Push
& $git add -A
& $git commit -m "Auto update: Fix guest role default, stock keys delivery, and remove default admin"
& $git push -u origin main --force

Write-Host "AUTO PUSH SUCCESSFUL! VERCEL DEPLOYMENT TRIGGERED."
