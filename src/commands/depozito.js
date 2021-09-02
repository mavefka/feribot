﻿const { MessageEmbed } = require('discord.js');
const i = '🔔'
const x = '🔔'
const tick = '🔔'
module.exports.run = async (bot, message, args) => {
    let data = await bot.fetchUser(message.author.id);
  const member = message.mentions.members.first() || message.guild.members.cache.get(args[0]) || message.member;

    if (args.join(' ') === 'hepsi') {
        if (data.coinsInWallet > data.bankSpace) {
            const max_deposit = (data.coinsInWallet + data.coinsInBank - data.bankSpace);
          
          if (data.coinsInBank-data.bankSpace === 0) {
            let bankerrorembed = new MessageEmbed()
            .setColor("RED")
            .setDescription(`:x: **${member.user.username}** : bankanda yer bulunmuyor.`);

            return message.channel.send(bankerrorembed).catch();
            //return message.channel.send("You don't have that much space in your bank. ");
        }
          
         /* let test21 = new MessageEmbed()
            .setColor("BLUE")
            .setDescription(`${i} bank full`);
          if (data.coinsInBank === data.bankSpace) return message.channel.send(test21);
            //return message.channel.send('Your bank is not big enough.');
          */
          
          
            data.coinsInWallet = max_deposit;
            let dep111embed = new MessageEmbed()
            .setColor("BLUE")
            .setDescription(`${i} **${member.user.username}** : **${(data.bankSpace - data.coinsInBank).toLocaleString()}** tlyi depozito etti.`);

            await message.channel.send(dep111embed).catch();
            //await message.channel.send(`Deposited **${data.bankSpace - data.coinsInBank}** coins.`);

            data.coinsInBank = ((data.coinsInWallet + data.bankSpace) - max_deposit);

            await data.save();
        } else {

            if ((data.coinsInWallet + data.coinsInBank) > data.bankSpace) {
                const left = (data.coinsInWallet + data.coinsInBank) - data.bankSpace;

            let begembed = new MessageEmbed()
            .setColor("BLUE")
            .setDescription(`${i} **${member.user.username}** **${(data.coinsInWallet - left).toLocaleString()}** tl'yi bankaya depozito etti.`);

            await message.channel.send(begembed).catch();
              
                //message.channel.send(`Deposited **${(data.coinsInWallet - left).toLocaleString()}** coins`);
                
                data.coinsInBank += (data.coinsInWallet - left);
                data.coinsInWallet = left;

                await data.save();
            } else {
            let dep111embed = new MessageEmbed()
            .setColor("BLUE")
            .setDescription(`${i} **${member.user.username}** **${(data.coinsInWallet).toLocaleString()}** tl'yi bankaya depozito etti.`);
            await message.channel.send(dep111embed).catch();
            //message.channel.send(`Deposited **${(data.coinsInWallet).toLocaleString()}** coins`);

                data.coinsInBank += data.coinsInWallet;
                data.coinsInWallet = 0;

                await data.save();
            }
        }
    } else {
        let depAmount = parseInt(args[0]);
        if (isNaN(depAmount)) {
          let numbererrorembed = new MessageEmbed()
            .setColor("RED")
            .setDescription(`${x} **${member.user.username}** : Böyle sayımı olur krdşm?`);

            return message.channel.send(numbererrorembed).catch();
            //return message.channel.send('That\'s not a number.');
        }

        if (parseInt(depAmount) > data.bankSpace) {
            let bankfullerrorembed = new MessageEmbed()
            .setColor("RED")
            .setDescription(`${x} **${member.user.username}** : Bankan yeterince büyük değil.`);

            return message.channel.send(bankfullerrorembed).catch();
            //return message.channel.send('Your bank is not big enough.');
        }
        if (parseInt(depAmount) > data.coinsInWallet) {
          let moneyerrorembed = new MessageEmbed()
            .setColor("RED")
            .setDescription(`${x} **${member.user.username}** : Bu kadar paran yok.`);

            return message.channel.send(moneyerrorembed).catch();
            //return message.channel.send("You don't have that much money.");
        }
        if (parseInt(depAmount) + data.coinsInBank > data.bankSpace) {
            let bankerrorembed = new MessageEmbed()
            .setColor("RED")
            .setDescription(`${x} **${member.user.username}** : Bankanda bu kadar yer yok.`);

            return message.channel.send(bankerrorembed).catch();
            //return message.channel.send("You don't have that much space in your bank. ");
        }

        data.coinsInBank += parseInt(depAmount);

            let depamountembed = new MessageEmbed()
            .setColor("BLUE")
            .setDescription(`${i} **${member.user.username}** **${(depAmount).toLocaleString()}** tl'yi bankaya depozito etti.`);

            return message.channel.send(depamountembed).catch();
      //  await message.channel.send(`Deposited **${(depAmount).toLocaleString()}** coins.`);

        data.coinsInWallet -= parseInt(depAmount);

        await data.save();
    }
}

module.exports.config = {
    name: 'deposit', // Command Name
    description: 'Deposit your money into your bank if you have space.', // Description
    usage: 'h deposit <amount>', // Usage
    botPerms: [], // Bot permissions needed to run command. Leave empty if nothing.
    userPerms: [], // User permissions needed to run command. Leave empty if nothing.
    aliases: ['depozito', 'dep','deposit'], // Aliases 
    bankSpace: 100, // Amount of bank space to give when command is used.
    cooldown: 60 // Command Cooldown
}
