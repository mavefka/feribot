const { MessageEmbed } = require("discord.js");
const i = '<:infomation:779736273639440394>'
const x = '<:bigx:779736072367505449>'
const tick = '<:bigtick:779736050892931082>'
module.exports.run = async (bot, message, args) => {
    const usertag = message.member;
    const random = Math.round(Math.random() * 100);
    const randomMessage = [
        `**Pythonic** sana ${random.toLocaleString()} para verdi.`,
        `**Sperkly** sana ${random.toLocaleString()} para verdi.`,
        `**Perfect** sana ${random.toLocaleString()} para verdi.`,
        `**Swenlor** sana ${random.toLocaleString()} para verdi.`,
        `**Wently** sana ${random.toLocaleString()} para verdi.`,
        `**ukqzn** sana ${random.toLocaleString()} para verdi.`,
        `**Umut Altınbaş** sana ${random.toLocaleString()} para verdi.`,
        `**Berkan Çenit** sana ${random.toLocaleString()} para verdi.`,
        `**Gazanan** sana ${random.toLocaleString()} para verdi.`,
        `**Arda** sana ${random.toLocaleString()} para verdi.`,
        `**Baran Can Helik** sana ${random.toLocaleString()} para verdi.`,
        `**Digna** sana ${random.toLocaleString()} para verdi.`,
        `**Haktan Lord** sana ${random.toLocaleString()} para verdi.`,
        `**Hacker** sana ${random.toLocaleString()} para verdi.`,
        `**Fwhy Adminleri** kendine acıdı ve sana ${random.toLocaleString()} liralık para verdi.`,
        `**Feribotun Şöförü sana ${random.toLocaleString()} para verdi.`,
        `**Plasmicin adminleri** sana ${random.toLocaleString()} para verdi.`,
                `**Yaman** sana ${random.toLocaleString()} para verdi.`,
                `**Orkun Işıtmak** sana ${random.toLocaleString()} para verdi.`,
                `**Enes Batur** sana ${random.toLocaleString()} para verdi.`,
                `**Swenlor** sana ${random.toLocaleString()} para verdi.`,

    ];

    const response = randomMessage[Math.floor((Math.random() * randomMessage.length))];

    let begembed = new MessageEmbed()
    .setColor("#3380ff")
    .setDescription(`**${usertag.user.username}** : ${response}`);

    await message.channel.send(begembed).catch();

    await bot.giveCoins(message.author.id, random);
}

module.exports.config = {
    name: 'beg', // Command Name
    description: 'allows you to beg people for coins.', // Description
    usage: 'h beg', // Usage
    botPerms: [], // Bot permissions needed to run command. Leave empty if nothing.
    userPerms: [], // User permissions needed to run command. Leave empty if nothing.
    aliases: ['dilen', 'para-iste'], // Aliases
    bankSpace: 13, // Amount of bank space to give when command is used.
    cooldown: 7 // Command Cooldown
}
