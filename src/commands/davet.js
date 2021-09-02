
const { MessageEmbed } = require('discord.js');
const economy = require('../models/EconomyModel');

module.exports.run = async (bot, message, args) => {

    const embed = new MessageEmbed()
        .setAuthor('FeriBot Davet')
        .addField("» **Davet et**", '[FeriBotu Davet Et!](https://discord.com/api/oauth2/authorize?client_id=784358223339323465&permissions=8&scope=bot)')
    .setColor('BLUE')
        .setFooter('feribot - davet');
    message.channel.send(embed);



}
module.exports.config = {
    name: 'davet', // Command Name
    description: 'Shows the richest people in your server.', // Description
    usage: 'h rich', // Usage
    botPerms: [], // Bot permissions needed to run command. Leave empty if nothing.
    userPerms: [], // User permissions needed to run command. Leave empty if nothing.
    aliases: ['davet', 'davet-et', 'd'], // Aliases
    bankSpace: 1, // Amount of bank space to give when command is used.
    cooldown: 10 // Command Cooldown
}
