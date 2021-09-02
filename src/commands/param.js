const { MessageEmbed } = require('discord.js');

module.exports.run = async (bot, message, args) => {
    const member = message.mentions.members.first() || message.guild.members.cache.get(args[0]) || message.guild.members.cache.find(member => member.user.username === args.slice(0).join(' ') || member.user.username === args[0]) || message.member;
    const user = await bot.fetchUser(member.id);
    const embed = new MessageEmbed()
        .setTitle(`${member.user.username}'nin bankasına bakıyorsun`)
        .setThumbnail(member.user.displayAvatarURL({ format: 'png', size: 256, dynamic: true }))
        .setDescription(`💳**Cüzdan**: ${user.coinsInWallet.toLocaleString()}\n🏦**Banka**: ${user.coinsInBank.toLocaleString()}/${user.bankSpace.toLocaleString()}\n🌐**Toplam para**: ${(user.coinsInWallet + user.coinsInBank).toLocaleString()}`)
        .setColor('#3380ff');
    message.channel.send(embed);
}

module.exports.config = {
    name: 'balance',
    description: 'displays a user\'s balance.',
    usage: 'h balance',
    botPerms: [],
    userPerms: [],
    aliases: ['para', 'banka', 'param'],
    bankSpace: 100,
    cooldown: 10
}

