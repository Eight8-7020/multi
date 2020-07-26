const Discord = require('discord.js')
const client = new Discord.Client()

client.on('ready', () => {
    console.log("Connected as " + client.user.tag)
    client.user.setActivity("syncing roles", {type: "PLAYING"})
})

const {bot_token} = require("./config.js")
client.login(bot_token)

const {role1} = require("./config.js")
const {role2} = require("./config.js")
if (member.roles(role => role1)){
    roles.add('role2')
}
if (member.roles(role => role2)){
    roles.add('role1')
}
