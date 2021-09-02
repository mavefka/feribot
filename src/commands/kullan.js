const itemss = require('../utils/items');
const i = '🎆'
const x = '🎈'
const tick = '✨'
const { MessageEmbed } = require('discord.js');

module.exports.run = async (bot, message, args) => {
  const member = message.mentions.members.first() || message.guild.members.cache.get(args[0]) || message.member;
    let user = await bot.fetchUser(message.author.id);
    if (!args.join(' ')) {
      
              let use1embed = new MessageEmbed()
              .setColor("RED")
              .setDescription(`${x} **${member.user.username}** : Kullanmak istediğin eşyanın idsini girmedin.`);
              return message.channel.send(use1embed);
        //////return message.channel.send("you can't use nothing lmao");
      
    }
    const item = itemss.find(x => x.name.toLowerCase() === args.join(' ').toString().toLowerCase());
    if (!item) {
      
              let use2embed = new MessageEmbed()
              .setColor("RED")
              .setDescription(`${x} **${member.user.username}** : Kullanmak istediğin eşya sende bulunmuyor.`);
              return message.channel.send(use2embed);
        //////return message.channel.send("can't use this item");
      
    }
    if (!item.canUse) {

              let use3embed = new MessageEmbed()
              .setColor("RED")
              .setDescription(`${x} **${member.user.username}** : Bu eşya kullanılamıyor.`);
              return message.channel.send(use3embed);
        //////return message.channel.send(":thinking: You can't use this item");

    }
    let founditem = user.items.find(x => x.name.toLowerCase() === item.name.toLowerCase());
    let array = [];
    array = user.items.filter(x => x.name !== item.name);
    if (!founditem) {
              let use3embed = new MessageEmbed()
              .setColor("RED")
              .setDescription(`${x} **${member.user.username}** : Böyle bir eşyaya sahip değilsin, idsini doğru yazdığından emin ol.`);
              return message.channel.send(use3embed);
        //////return message.channel.send("you don't have this item");
    }
    
    if (item.keep == false) {
        if (founditem.amount === 1) {
            user.items = user.items.filter(x => x.name.toLowerCase() != item.name.toLowerCase());
            await user.save();
        }
        else {
            array.push({
                name: item.name,
                amount: founditem.amount - 1,
                description: item.description
            });
            user.items = array;
            await user.save();
        }
    }
    await item.run(bot, message, args);
}

module.exports.config = {
    name: 'use', // Command Name
    description: 'use an item.', // Description
    usage: 'h use <item id>', // Usage
    botPerms: [], // Bot permissions needed to run command. Leave empty if nothing.
    userPerms: [], // User permissions needed to run command. Leave empty if nothing.
    aliases: ['kullan'], // Aliases 
    bankSpace: 3, // Amount of bank space to give when command is used.
    cooldown: 5 // Command Cooldown
}
