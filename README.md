## syncBot for Discord ##

This bot is used to sync roles across discord servers. 

# Note: This project is not yet finished. #

### Initial setup ###

 Firstly, Install and Run node.js from the official website: [nodejs.org](https://nodejs.org/dist/v12.18.3/node-v12.18.3-x86.msi)    
 Open your command prompt. (Search for cmd in Windows+R)  
 Type `git clone https://github.com/LFCfan25/syncBot` in the command prompt and hit enter.  
 Wait for it to finish cloning.  
 Type `cd ~/syncBot` in the command prompt and hit enter.  
 
 
 ### Editing the configuration ###
 Type `vim config.js` in the command prompt and hit enter.  
 click `i` to enter insert mode.  
 edit the config appropiately.  
 
##### Discord Bot Token #####
 Get your bot's token from: [Discord Developer Portal](https://discordapp.com/developers/applications/)  
 Click on your application -> Bot -> Token -> "Click to Reveal Token"  
 Make sure to keep this token secret to avoid damage to your server.  
 Enter the token in the `your_token_here` space on config.js . (sidenote: make sure to keep the `'` that are beside it.)  

##### Role IDs #####
 To get a role IDs, (required for role sync), turn on developer options in Settings -> Apperance -> Advanced -> Developer mode.   
 Right click a role and copy the IDs.  
 Enter ID No.1 on `role_1` and ID No.2 on `role_2`. (It doesn't really matter which way you do them, as long as they are both there)  

##### click `esc` to exit insert mode.  
##### type `:wq` to save and exit the config.  

### Adding the bot to your server:
 Go back to the [Discord Developer Portal](https://discordapp.com/developers/applications/).  
 Collect your Client ID  
 Go to [Discord Permissions Calculator](https://discordapi.com/permissions.html#268504064) and follow all the steps there.  
 Make sure to add the bot to both of your servers.  
 
### Starting the bot (regular):  
##### Use this method if you aren't hosting on a VPS.  
Double click the file: start.bat
Wait for the bot to be ready
And that's it!  
To stop the bot at any time, close the command prompt.  
To restart the bot at any time, close and open start.bat.
  
### Starting the bot (pm2):  
##### Use this method if you are hosting on a VPS and need 24/7 uptime.  
Run the command `npm -g pm2`  
Change to the bots directory. (`cd ~/syncBot`)  
Run the command `pm2 start syncBot-pm2.js`  
And that's it!  
To restart at any time, use `pm2 restart syncBot` and to stop at any time use `pm2 stop syncBot`  

### ~ END OF DOCUMENTATION ~ ###
