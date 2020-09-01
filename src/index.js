const Discord = require("discord.js");
const client = new Discord.Client();
const fs = require('fs');

if (fs.existsSync(./config.env)) {
        require('dotenv').config();
    const config = require(process.env)
    } else {if (fs.existsSync(./config.json)) {
        const config = require(./config.json)
        } else {if (fs.existsSync(./config.js)) {
            var config = require('./config.js')
            } else {if (fs.existsSync(./config.ini)){
                const ini = require('ini');
                const config = ini.parse(fs.readFileSync('./config.ini', 'utf-8'))
                } else {@echo Please check that you have a config file.}
                   };

client.login(config.token)
client.on('ready', () => {
    console.log("Connected!" + client.user.tag)
    client.user.setActivity("config.statusmessage", {type: "config.statustype"})
})

if (message.guild.roles.cache.find(config.role1) {
        if (message.member.roles.cache.some(config.role1)) {
            message.member.roles.add(config.role2).catch(console.error);
}

if (message.guild.roles.cache.find(config.role2) {
        if (message.member.roles.cache.some(config.role2)) {
            message.member.roles.add(config.role1).catch(console.error);
}
