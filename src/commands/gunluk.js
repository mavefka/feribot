const { MessageEmbed } = require('discord.js');
const prettyMilliseconds = require('pretty-ms');
const i = '🎆'
const tick = '🎈'
const cd = '✨'

module.exports.run = async (bot, message, args) => {
  const member = message.member;
    let user = await bot.fetchUser(message.author.id);
    if ((Date.parse(user.dailyStreak) + 86400000) > Date.now()) {
        const embed = new MessageEmbed()
            .setDescription(`${cd} **${member.user.username}** : Bu komutu şuan kullanamazsın\n\n Beklemen lazm \`${prettyMilliseconds((Date.parse(user.dailyStreak) + 86400000) - Date.now())}\` Olmaz yani.`)
            .setColor('#FFA500');
        return message.channel.send(embed);
    } else {
        const claimed = new MessageEmbed()
            .setDescription(`${tick} **${member.user.username}** : Yaşasın! Günlük ödülünü aldın, 24 saat sonra yeniden kullanabilirsin.`)
            .setColor('GREEN');
        message.channel.send(claimed);
         user.coinsInWallet += 1000;
       user.save().then(user.dailyStreak = new Date(Date.now()))

    }
}

module.exports.config = {
    name: 'daily', // Command Name
    description: 'Daily Reward.', // Description
    usage: 'h daily', // Usage
    botPerms: [], // Bot permissions needed to run command. Leave empty if nothing.
    userPerms: [], // User permissions needed to run command. Leave empty if nothing.
    aliases: ['günlük', 'gunluk'], // Aliases
    bankSpace: 100, // Amount of bank space to give when command is used.
    cooldown: 0.1 // Command Cooldown
}
