const { MessageEmbed } = require("discord.js");
const i = '🎆'
const x = '🎈'
const tick = '✨'
module.exports.run = async (bot, message, args) => {

    const usertag = message.member;
    const random = Math.round(Math.random() * 400);
    const randomMessage = [
        `Çöpü arayıp ${random.toLocaleString()} tl kazandın.`,
        `Ankarada sokakları arayıp ${random.toLocaleString()} tl kazandın.`,
        `Polisi arayıp ${random.toLocaleString()} tl kazandın.`,
        `Minecraft sunucularının skywars lobilerinde arayıp ${random.toLocaleString()} tl kazandın.`,
        `Enes baturu arayıp ${random.toLocaleString()} tl kazandın.`,
        `Kütüphaneyi arayıp ${random.toLocaleString()} tl kazandın.`,
        `Seni arayıp ${random.toLocaleString()} tl kazandın.`,
        `kediciği arayıp ${random.toLocaleString()} tl kazandın.`,

    ];
    const response = randomMessage[Math.floor((Math.random() * randomMessage.length))];
    let searchembed = new MessageEmbed()
    .setColor("GREEN")
    .setDescription(`${tick} **${usertag.user.username}** : ${response}`);

    await message.channel.send(searchembed).catch();
    await bot.giveCoins(message.author.id, random);
}

module.exports.config = {
    name: 'search', // Command Name
    description: 'search for coins.', // Description
    usage: 'h search', // Usage
    botPerms: [], // Bot permissions needed to run command. Leave empty if nothing.
    userPerms: [], // User permissions needed to run command. Leave empty if nothing.
    aliases: ['ara'], // Aliases
    bankSpace: 15, // Amount of bank space to give when command is used.
    cooldown: 15 // Command Cooldown
}
