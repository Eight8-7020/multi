@echo off
@echo Installing node modules....
call npm install

 if NOT ["%errorlevel%"]==["0"] (
  pause
  exit /b %errorlevel%

@echo:
@echo Node Modules installed successfully.
@echo:
@echo Starting Sync...
call npm start

 if NOT ["%errorlevel%"]==["0"] (
  pause
  exit /b %errorlevel%

@echo:
@echo Syncing roles!
)
