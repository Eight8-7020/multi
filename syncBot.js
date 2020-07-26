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

let role1 = message.guild.roles.cache.find(r => r.name === "role1");
let role2 = message.guild.roles.cache.find(r => r.name === "role2");

if (message.guild.roles.cache.find(role1) {
        if (message.member.roles.cache.some(role1)) {
            message.member.roles.add(role2).catch(console.error);

        }
