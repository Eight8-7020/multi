const Discord = require("discord.js");
const client = new Discord.Client();
const fs = require('fs');
const ini = require('ini');
const config = ini.parse(fs.readFileSync('./config.ini', 'utf-8'));

client.login(config.token)
client.on('ready', () => {
    console.log("Connected!" + client.user.tag)
    client.user.setActivity("myself sync roles", {type: "WATCHING"})
})

if (message.guild.roles.cache.find(config.role1) {
        if (message.member.roles.cache.some(config.role1)) {
            message.member.roles.add(config.role2).catch(console.error);
}

if (message.guild.roles.cache.find(config.role2) {
        if (message.member.roles.cache.some(config.role2)) {
            message.member.roles.add(config.role1).catch(console.error);
}
