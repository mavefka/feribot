
const { MessageEmbed } = require('discord.js');
const economy = require('../models/EconomyModel');

module.exports.run = async (bot, message, args) => {

    const embed = new MessageEmbed()
        .setAuthor('FeriBot İstatistik!')
        .addField("» **Kullanıcılar**",bot.guilds.cache.reduce((a, b) => a + b.memberCount, 0).toLocaleString(), true)
        .addField("» **Sunucular**", bot.guilds.cache.size.toLocaleString(), true)
        .addField("» **Kanallar**", bot.channels.cache.size.toLocaleString(), true)
    .setColor('BLUE')
        .setFooter('feribot - stats');
    message.channel.send(embed);



}
module.exports.config = {
    name: 'istatistik', // Command Name
    description: 'Shows the richest people in your server.', // Description
    usage: 'h rich', // Usage
    botPerms: [], // Bot permissions needed to run command. Leave empty if nothing.
    userPerms: [], // User permissions needed to run command. Leave empty if nothing.
    aliases: ['stats', 'is', 'i'], // Aliases
    bankSpace: 1, // Amount of bank space to give when command is used.
    cooldown: 10 // Command Cooldown
}
