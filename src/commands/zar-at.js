const { MessageEmbed } = require("discord.js");
const i = '🎆'
const x = '🎈'
const tick = '✨'
module.exports.run = async (bot, message, args) => {
    const botRoll = Math.floor(Math.random() * 7)+1;
    const userChoice = Math.floor(Math.random() * 7)+1;
    const userData = await bot.fetchUser(message.author.id);
    const member = message.mentions.members.first() || message.guild.members.cache.get(args[0]) || message.member;
    let passivewarn = new MessageEmbed()
    .setColor("RED")
    .setDescription(`${x} **${member.user.username}** : Pasifsin`);
  
    if (userData.passive == true) return message.channel.send(passivewarn);
  
    let betAmount = args[0];
    const result = userChoice-botRoll;
  
    let coinswarn = new MessageEmbed()
    .setColor("RED")
    .setDescription(`${x} **${member.user.username}** : Kaç tl ile zar atmak istediğini belirtmen gerekiyor. `);

    if (!betAmount || isNaN(betAmount) && betAmount !== 'all' && betAmount !== 'max') return message.channel.send(coinswarn);

    let coinmin = new MessageEmbed()
    .setColor("RED")
    .setDescription(`${x} **${member.user.username}** : En az 200 tl ile zar atabilirsin`);

    if (betAmount < 200) return message.channel.send(coinmin);

    if (betAmount == 'all' || betAmount == 'max') betAmount=userData.coinsInWallet;
    else betAmount=parseInt(args[0]);
  
    let moneywarn = new MessageEmbed()
    .setColor("RED")
    .setDescription(`${x} **${member.user.username}** : Bu kadar paran yok.`);

           if (betAmount > userData.coinsInWallet) {
           return message.channel.send(moneywarn);
           }
  
    if (botRoll < userChoice) {
        const wonCoins = (betAmount + (betAmount * 0.20));
        userData.coinsInWallet += parseInt(wonCoins);
        await userData.save();
        const wonEmbed = new MessageEmbed()
        .setColor('GREEN')
        .setThumbnail(member.user.displayAvatarURL({ format: 'png', size: 256, dynamic: true }))
        .setFooter("feri")
        .setDescription(`Zar at | Oyuncu **${member.user.username}** \n\nFeri zar atıyor: \`${botRoll}\` \n${member.user.username} atılan sayı: \`${userChoice}\`\n\Kazanılan: **${wonCoins.toLocaleString()}**tl`)
        message.channel.send(wonEmbed);
    } else if (botRoll == userChoice) {
        const tieCoins = parseInt(betAmount/2);
        userData.coinsInWallet -= parseInt(tieCoins);
        userData.save();
        const tieEmbed = new MessageEmbed()
        .setColor('YELLOW')
        .setThumbnail(member.user.displayAvatarURL({ format: 'png', size: 256, dynamic: true }))
        .setFooter("feri")
        .setDescription(`Zar atma: Zarın baş çıtkı`)
        message.channel.send(tieEmbed);
    } else if (botRoll > userChoice) {
        const lostCoins = (betAmount);
        userData.coinsInWallet -= parseInt(betAmount);
        await userData.save();
        const lostEmbed = new MessageEmbed()
        .setColor('RED')
        .setThumbnail(member.user.displayAvatarURL({ format: 'png', size: 256, dynamic: true }))
        .setFooter("Feri")
        .setDescription(`Feri zar | Oyuncu: **${member.user.username}** \n\nFeri zar atıyor: \`${botRoll}\` \n${member.user.username} zar atıyor: \`${userChoice}\`\n\nKayıp Ettin: **${lostCoins.toLocaleString()}**tl`)
        message.channel.send(lostEmbed);
    }
}   
module.exports.config = {
    name: 'dice', // Command Name
    description: 'gamble your saving and try win big.', // Description
    usage: 'h dice <amount>', // Usage
    botPerms: [], // Bot permissions needed to run command. Leave empty if nothing.
    userPerms: [], // User permissions needed to run command. Leave empty if nothing.
    aliases: ['zar-at', 'zarat', 'zar'], // Aliases 
    bankSpace: 10, // Amount of bank space to give when command is used.
    cooldown: 5 // Command Cooldown
}

