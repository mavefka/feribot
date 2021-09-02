const Discord = require('discord.js');
const prettyMilliseconds = require('pretty-ms');
const prefix = 'feri';
const cd = ':orange_circle:'
module.exports = async (bot, message) => {
    const member = message.member;
    if (message.author.bot || message.channel.type === 'dm') return;
    if (message.content.toLowerCase().startsWith(prefix.toLowerCase())) {
        const messageArray = message.content.split(' ');
        const cmd = messageArray[1];
        const args = messageArray.slice(2);

        const command = bot.commands.get(cmd) || bot.commands.get(bot.aliases.get(cmd));
        if (command) {
            bot.commandsUsed += 1;
            if (!bot.cooldowns.has(command.config.name)) {
                bot.cooldowns.set(command.config.name, new Discord.Collection());
            }

            const now = Date.now();
            const timestamps = bot.cooldowns.get(command.config.name);
            const cooldownAmount = (command.config.cooldown || 3) * 1000;

            if (timestamps.has(message.author.id)) {
                const expirationTime = timestamps.get(message.author.id) + cooldownAmount;
                if (now < expirationTime) {
                    const timeLeft = (expirationTime - now) / 1000;
                    const cooldownEmbed = new Discord.MessageEmbed()
                        .setDescription(`${cd} **${member.user.username}** : Bu komut şu anda yavaş mod beklemesinde.\n\n \`${prettyMilliseconds(timeLeft * 1000)}\` saniye sonra yeniden kullanabilirsin.\n\nSunucular için normal yavaşmod: \`${prettyMilliseconds(command.config.cooldown * 1000)}\`.`)
                        .setColor('#3380ff');
                    return message.channel.send(cooldownEmbed);
                }
            }
            else {
                if (!command.config.botPerms) return console.log("Botun yetkisi yok");
                if (!Array.isArray(command.config.botPerms)) return console.log('Bot yetkisi bir array olmalı.');
                if (!command.config.userPerms) return console.log("Bota kullanıcı yetkisi verilmedi.");
                if (!Array.isArray(command.config.userPerms)) return console.log('Kullanıcı yetkisi bir array olmalı')
                if (!message.guild.me.hasPermission(command.config.botPerms)) {
                    const beauty = command.config.botPerms.join('\`, \`'); 
                    const noBotPerms = new Discord.MessageEmbed()
                        .setTitle('Yetkim yok')
                        .setDescription(`Bir yetkiye ihtiyacım var : \`${beauty}\`.`)
                        .setColor('RED');
                    return message.channel.send(noBotPerms)
                }
                if (!message.member.hasPermission(command.config.userPerms)) {
                    const beauty = command.config.userPerms.join('\`, \`');
                    const noUserPerms = new Discord.MessageEmbed()
                    .setTitle('Yetkin yok')
                    .setDescription(`Şu yetkiler sizde bulunmuyor: \`${beauty}\`.`)
                    .setColor('RED');
                    return message.channel.send(noUserPerms)
                }
                if (command.config.bankSpace !== 0) {
                    bot.giveBankSpace(message.author.id, command.config.bankSpace);
                }
                await command.run(bot, message, args);
                timestamps.set(message.author.id, now);
                setTimeout(() => timestamps.delete(message.author.id), cooldownAmount);
            }
        }
    }
}
