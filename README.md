## syncBot for Discord ##

This bot is used to sync roles across servers.

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

