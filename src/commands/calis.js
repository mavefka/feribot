const ms = require("parse-ms");
const { MessageEmbed } = require("discord.js")
const i = '<:infomation:779736273639440394>'
const x = '<:bigx:779736072367505449>'
const tick = '<:bigtick:779736050892931082>'

module.exports.run = async (bot, message, args) => {

    let user = message.author;
    let author = await bot.fetchUser(`work_${message.guild.id}_${user.id}`)

    let timeout = 360;

    if (author !== null && timeout - (Date.now() - author) > 0) {
        let time = ms(timeout - (Date.now() - author));

        let timeEmbed = new MessageEmbed()
        .setColor("#3380ff")
        .setDescription(`**${user.user.username}** : Zaten yakın bir zamanda çalıştın! ${time.minutes}dakika ${time.seconds}saniye `);
        message.channel.send(timeEmbed)
      } else {
        let replies = ['Yazılımcı','Dilenci','Garson','Owocu','Şef','Sanayi çalışanı','Youtuber','e girl', 'e boy', 'Suriyeli','neden çalıştın mk','şahir','ayakkabıcı','porçay','kuklacı','sövalye','pythonic','ukqzn','wently']

        let result = Math.floor((Math.random() * replies.length));
        let amount = Math.floor(Math.random() * 300) + 1;
        let embed1 = new MessageEmbed()
        .setColor("GREEN")
        .setDescription(`${replies[result]} olarak çalıştın ve ${amount} tl kazandın.`);
        message.channel.send(embed1)

        bot.giveCoins(message.author.id, amount)
    };
}

module.exports.config = {
    name: 'work', // Command Name
    description: 'work', // Description
    usage: 'h work', // Usage
    botPerms: [], // Bot permissions needed to run command. Leave empty if nothing.
    userPerms: [], // User permissions needed to run command. Leave empty if nothing.
    aliases: ['calis', 'çalış'], // Aliases
    bankSpace: 50, // Amount of bank space to give when command is used.
    cooldown: 15 // Command Cooldown
}
