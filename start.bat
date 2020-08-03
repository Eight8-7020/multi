@ECHO OFF
echo Starting Sync...
call node syncBot.js

 if NOT ["%errorlevel%"]==["0"] (
  pause
  exit /b %errorlevel%

echo Syncing roles!
)
