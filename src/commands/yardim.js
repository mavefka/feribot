
const { MessageEmbed } = require('discord.js');
const economy = require('../models/EconomyModel');

module.exports.run = async (bot, message, args) => {

    const embed = new MessageEmbed()
        .setAuthor('FeriBot yardım')
.addField('💸 PARA', '\`çalış\`, \`günlük\`, \`dilen\`, \`zenginler\`, \`ara\`, \`çal\`')
    .addField('🛒 MARKET', '\`satın-al\`, \`kullan\`, \`sat\`, \`hediye\`, \`çanta\`, \`market\`')
    .addField('🏦 BANKA', '\`banka\`, \`depozito\`, \`profil\`, \`zenginler\`, \`para-çek\`, \`ver\`')
    .addField('🎯 AKTİVİTELER', '\`zar-at\`, \`rulet\`, \`slots\`, \`balık-tut\`, \`avlan\`')
    .addField('🤖 BOT BİLGİ', '\`davet-et\`, \`istatistik\`')
    .setColor('BLUE')
        .setFooter('feribot - sjsj');
    message.channel.send(embed);



}
module.exports.config = {
    name: 'yardım', // Command Name
    description: 'Shows the richest people in your server.', // Description
    usage: 'h rich', // Usage
    botPerms: [], // Bot permissions needed to run command. Leave empty if nothing.
    userPerms: [], // User permissions needed to run command. Leave empty if nothing.
    aliases: ['yardim'], // Aliases
    bankSpace: 1, // Amount of bank space to give when command is used.
    cooldown: 10 // Command Cooldown
}
