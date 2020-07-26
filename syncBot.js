const Discord = require('discord.js')
const client = new Discord.Client()

client.on('ready', () => {
    console.log("Connected!" + client.user.tag)
    client.user.setActivity("syncing roles", {type: "PLAYING"})
})

const {bot_token} = require("./config.js")
client.login(bot_token)

const roles = {
role1: 'role id',
role2: 'role id',
}

module.exports = { roles }

let role1 = message.guild.roles.cache.find("role1");
let role2 = message.guild.roles.cache.find("role2");

if (message.guild.roles.cache.find(role1) {
        if (message.member.roles.cache.some(role1)) {
            message.member.roles.add(role2).catch(console.error);

        }

if (message.guild.roles.cache.find(role2) {
        if (message.member.roles.cache.some(role2)) {
            message.member.roles.add(role1).catch(console.error);

        }
