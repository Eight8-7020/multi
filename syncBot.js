const Discord = require('discord.js')
const client = new Discord.Client()

client.on('ready', () => {
    console.log("Connected as " + client.user.tag)
    client.user.setActivity("syncing roles", {type: "PLAYING"})
})

const { bot_token } = require("./config.js")

client.login(bot_token)
