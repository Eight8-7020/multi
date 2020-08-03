const Discord = require("discord.js");
const client = new Discord.Client();
const config = require("./config.json");

client.login(config.token)
client.on('ready', () => {
    console.log("Connected!" + client.user.tag)
    client.user.setActivity("syncing roles", {type: "PLAYING"})
})

if (message.guild.roles.cache.find(config.role1) {
        if (message.member.roles.cache.some(config.role1)) {
            message.member.roles.add(config.role2).catch(console.error);

        }

if (message.guild.roles.cache.find(config.role2) {
        if (message.member.roles.cache.some(config.role2)) {
            message.member.roles.add(config.role1).catch(console.error);

        }
