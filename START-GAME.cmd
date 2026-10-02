@echo off
cd /d "%~dp0"
curl.exe --connect-timeout 1 --max-time 2 --fail --silent http://localhost:4173/health >nul 2>&1
if not errorlevel 1 (
  start "" "http://localhost:4173"
  exit /b
)
if not exist node_modules\ws call npm.cmd ci
start "" "http://localhost:4173"
node server.mjs
pause
