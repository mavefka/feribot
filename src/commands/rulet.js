
const { MessageEmbed } = require('discord.js');
const economy = require('../models/EconomyModel');

module.exports.run = async (bot, message, args) => {

    const embed = new MessageEmbed()
        .setAuthor('Bu komut bakımdadır.')
        .setDescription("Verdiğimiz bir bug açığından dolayı, sınırsız para kasılıyordu.\nBu yüzden rulet komutunu bir süre bakıma aldık.")
        .setColor('BLUE')
        .setFooter('feribot - bakım');
    message.channel.send(embed);



}
module.exports.config = {
    name: 'rulet', // Command Name
    description: 'Shows the richest people in your server.', // Description
    usage: 'rulet', // Usage
    botPerms: [], // Bot permissions needed to run command. Leave empty if nothing.
    userPerms: [], // User permissions needed to run command. Leave empty if nothing.
    aliases: ['rulet'], // Aliases
    bankSpace: 1, // Amount of bank space to give when command is used.
    cooldown: 10 // Command Cooldown
}
