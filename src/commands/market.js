
const { MessageEmbed } = require('discord.js');
const economy = require('../models/EconomyModel');

module.exports.run = async (bot, message, args) => {

    const embed = new MessageEmbed()
        .setAuthor('FeriBot Market')
    .addField('🚣 AKTİVİTE', '\`🎣 olta\` ile balık tut (10000), \`🔫 silah\` ile avlanabilirsin (25000tl)')
    .addField('✨ KULLANILABİLEN', '\`🔒 PadLock\` ile cüzdanını (1kez) çaldırma (2.500tl)')
    .addField('✨ KULLANIŞLI', '\`:axe: balta\` ile ağaç keserek para kazan (2500tl)')
        .addField('✨ İŞSSİZ', 'bot daha dün çıktı ne beklion')
    .setColor('BLUE')
        .setFooter('Dikkat! Bazı eşyaları almak için kendin bulman gerekir');
    message.channel.send(embed);



}
module.exports.config = {
    name: 'show', // Command Name
    description: 'Shows the richest people in your server.', // Description
    usage: 'h rich', // Usage
    botPerms: [], // Bot permissions needed to run command. Leave empty if nothing.
    userPerms: [], // User permissions needed to run command. Leave empty if nothing.
    aliases: ['market'], // Aliases
    bankSpace: 1, // Amount of bank space to give when command is used.
    cooldown: 10 // Command Cooldown
}
