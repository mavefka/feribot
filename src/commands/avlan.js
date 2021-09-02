const itemss = require('../utils/items');
const { MessageEmbed } = require("discord.js");
const i = '🎆'
const x = '🎈'
const tick = '✨'
module.exports.run = async (bot, message, args) => {
  let user = await bot.fetchUser(message.author.id);
const member = message.mentions.members.first() || message.guild.members.cache.get(args[0]) || message.member;


const item = itemss.find(x => x.name.toLowerCase() === 'silah');  
let founditem = user.items.find(x => x.name.toLowerCase() === 'silah');
    let array = [];
    array = user.items.filter(x => x.name !== 'silah');
    if (!founditem) {
              let use3embed = new MessageEmbed()
              .setColor("RED")
              .setDescription(`${x} **${member.user.username}** : Hey! silahın bulunmuyor, almak istiyorsan idsi: silah.`);
              return message.channel.send(use3embed);
        //////return message.channel.send("you don't have this item");
    }
  /*
  const findItem = data.items.find(i => i.name.toLowerCase() == 'rifle');
        let userInv = data.items.filter(i => i.name.toLowerCase() !== 'rifle');
    if (!userInv < 1) {
      
              let use2embed = new MessageEmbed()
              .setColor("RED")
              .setDescription(`${x} **${member.user.username}** : Hey! silahın bulunmuyor, almak istiyorsan idsi: silah.`);
              return message.channel.send(use2embed);
    }
*/
  
  

const randomMessage = [
  'bear',
  'deer',
  'duck',
  'pig',
  'cow',
  'rabbit',
  'missed'
    ];
 //  'deer',
 // 'duck',
  //'pig',
  //'cow',
  //'fox',
  //'rabbit',
  //'chicken',
  //'boar',
  //'missed' 
    const response = randomMessage[Math.floor((Math.random() * randomMessage.length))];
  
    const userData = await bot.fetchUser(message.author.id);
    
    if (response == 'bear') {
        const deerAmount = Math.round(Math.random() * 1) + 1;
        const data = await bot.fetchUser(message.author.id);
        const EmbedBear = new MessageEmbed()
        .setDescription(`${tick} **${member.user.username}** : Avlanmaya gittin ve, **${deerAmount}** tane ayı ile geli geldin! 🐻`)
        .setColor("GREEN")
        message.channel.send(EmbedBear);
        //message.channel.send(`You went hunting and came back with **${deerAmount}** x Bear 🐻`);
        const findItem = data.items.find(i => i.name.toLowerCase() == 'ayi');
        let userInv = data.items.filter(i => i.name.toLowerCase() !== 'ayi');
        if (findItem) {
            userInv.push({ name: 'ayi', amount: (findItem.amount + deerAmount), description: '🐻 **Ayı**\nSatarak para kazanabilirsin.' });
            data.items = userInv;
            await data.save();
        } else {
            userInv.push({ name: 'ayi', amount: deerAmount, description: '🐻 **Ayı**\nSatarak para kazanabilirsin.' });
            data.items = userInv;
            await data.save();
        }
    } else if (response == 'deer') {
        const deerAmount = Math.round(Math.random() * 1) + 1;
        const data = await bot.fetchUser(message.author.id);
        const EmbedDeer = new MessageEmbed()
        .setDescription(`${tick} **${member.user.username}** : Avlanmaya gittin ve **${deerAmount}** tane geyik ile geri geldin! 🦌`)
        .setColor("GREEN")
        message.channel.send(EmbedDeer);
        //message.channel.send(`You went hunting and came back with **${deerAmount}** x Deer 🦌`);
        const findItem = data.items.find(i => i.name.toLowerCase() == 'geyik');
        let userInv = data.items.filter(i => i.name.toLowerCase() !== 'geyik');
        if (findItem) {
            userInv.push({ name: 'geyik', amount: (findItem.amount + deerAmount), description: '🦌 **Geyik**\nSatarak para kazanabilirsin.' });
            data.items = userInv;
            await data.save();
        } else {
            userInv.push({ name: 'geyik', amount: deerAmount, description: '🦌 **Geyik**\nSatarak para kazanabilirsin.' });
            data.items = userInv;
            await data.save();
        }
    } else if (response == 'duck') {
        const deerAmount = Math.round(Math.random() * 1) + 1;
        const data = await bot.fetchUser(message.author.id);
        const EmbedDuck = new MessageEmbed()
        .setDescription(`${tick} **${member.user.username}** : Avlanmaya gittin ve **${deerAmount}** tane ördek ile geri geldin, ördekler iyi para eder 🦆`)
        .setColor("GREEN")
        message.channel.send(EmbedDuck);
        //message.channel.send(`You went hunting and came back with **${deerAmount}** x Duck 🦆`);
        const findItem = data.items.find(i => i.name.toLowerCase() == 'ordek');
        let userInv = data.items.filter(i => i.name.toLowerCase() !== 'ordek');
        if (findItem) {
            userInv.push({ name: 'ordek', amount: (findItem.amount + deerAmount), description: '🦆 **Ördek**\nsatarak para kazanabilirsin.' });
            data.items = userInv;
            await data.save();
        }
          else {
            userInv.push({ name: 'ordek', amount: deerAmount, description: '🦆 **Ördek**\nsatarak para kazanabilirsin.' });
            data.items = userInv;
            await data.save();
        }
          } else if (response == 'pig') {
        const deerAmount = Math.round(Math.random() * 1) + 1;
        const data = await bot.fetchUser(message.author.id);
        const EmbedPig = new MessageEmbed()
        .setDescription(`${tick} **${member.user.username}** : Avlanmaya gittin ve **${deerAmount}** tane domuz ile geri geldin 🐷`)
        .setColor("GREEN")
        message.channel.send(EmbedPig);
        //message.channel.send(`You went hunting and came back with **${deerAmount}** x Pig 🐷`);
        const findItem = data.items.find(i => i.name.toLowerCase() == 'domuz');
        let userInv = data.items.filter(i => i.name.toLowerCase() !== 'domuz');
        if (findItem) {
            userInv.push({ name: 'domuz', amount: (findItem.amount + deerAmount), description: '🐷 **domuz**\nsatarak para kazan(ma).' });
            data.items = userInv;
            await data.save();
        } else {
            userInv.push({ name: 'domuz', amount: deerAmount, description: '🐷 **domuz**\nsatarak para kazan(ma).' });
            data.items = userInv;
            await data.save();
        }
          } else if (response == 'cow') {
        const deerAmount = Math.round(Math.random() * 1) + 1;
        const data = await bot.fetchUser(message.author.id);
        const EmbedCow = new MessageEmbed()
        .setDescription(`${tick} **${member.user.username}** : Avlanmaya gittin ve **${deerAmount}** tane inek ile geri geldin 🐮`)
        .setColor("GREEN")
        message.channel.send(EmbedCow);
        //message.channel.send(`You went hunting and came back with **${deerAmount}** x Cow 🐮`);
        const findItem = data.items.find(i => i.name.toLowerCase() == 'inek');
        let userInv = data.items.filter(i => i.name.toLowerCase() !== 'inek');
        if (findItem) {
            userInv.push({ name: 'inek', amount: (findItem.amount + deerAmount), description: '🐮 **İnek**\nsatarak para kazan.' });
            data.items = userInv;
            await data.save();
        } else {
            userInv.push({ name: 'inek', amount: deerAmount, description: '🐮 **İnek**\nsatarak para kazan.' });
            data.items = userInv;
            await data.save();
        }
        } else if (response == 'fox') {
        const deerAmount = Math.round(Math.random() * 1) + 1;
        const data = await bot.fetchUser(message.author.id);
        const EmbedFox = new MessageEmbed()
        .setDescription(`${tick} **${member.user.username}** : Avlanmaya gittin ve **${deerAmount}** tane tilki yakalayıp geri geldin 🦊`)
        .setColor("GREEN")
        message.channel.send(EmbedFox);
        //message.channel.send(`You went hunting and came back with **${deerAmount}** x Fox 🦊`);
        const findItem = data.items.find(i => i.name.toLowerCase() == 'tilki');
        let userInv = data.items.filter(i => i.name.toLowerCase() !== 'tilki');
        if (findItem) {
            userInv.push({ name: 'tilki', amount: (findItem.amount + deerAmount), description: '🦊 **tilki**\nsatarak para kazan..' });
            data.items = userInv;
            await data.save();
        } else {
            userInv.push({ name: 'fox', amount: deerAmount, description: '🦊 **tilki**\nsatarak para kazan.' });
            data.items = userInv;
            await data.save();
        }
        } else if (response == 'rabbit') {
        const deerAmount = Math.round(Math.random() * 1) + 1;
        const data = await bot.fetchUser(message.author.id);
        const EmbedRabbit = new MessageEmbed()
        .setDescription(`${tick} **${member.user.username}** : Avlanmaya gittin ve **${deerAmount}** tane tavşan ile geri geldin 🐰`)
        .setColor("GREEN")
        message.channel.send(EmbedRabbit);
        //message.channel.send(`You went hunting and came back with **${deerAmount}** x Rabbit 🐰`);
        const findItem = data.items.find(i => i.name.toLowerCase() == 'tavsan');
        let userInv = data.items.filter(i => i.name.toLowerCase() !== 'tavsan');
        if (findItem) {
            userInv.push({ name: 'tavsan', amount: (findItem.amount + deerAmount), description: '🐰 **tavsan**\nsatarak para kazan.' });
            data.items = userInv;
            await data.save();
        } else {
            userInv.push({ name: 'tavsan', amount: deerAmount, description: '🐰 **tavsan**\nsatarak para kazan.' });
            data.items = userInv;
            await data.save();
        }
        } else if (response == 'chicken') {
        const deerAmount = Math.round(Math.random() * 1) + 1;
        const data = await bot.fetchUser(message.author.id);
        const EmbedChicken = new MessageEmbed()
        .setDescription(`${tick} **${member.user.username}** : You went hunting and came back with **${deerAmount}** x Chicken 🐔`)
        .setColor("GREEN")
        message.channel.send(EmbedChicken);
        //message.channel.send(`You went hunting and came back with **${deerAmount}** x Chicken 🐔`);
        const findItem = data.items.find(i => i.name.toLowerCase() == 'chicken');
        let userInv = data.items.filter(i => i.name.toLowerCase() !== 'chicken');
        if (findItem) {
            userInv.push({ name: 'chicken', amount: (findItem.amount + deerAmount), description: '🐔 **Chicken**\nsell chicken to make money.' });
            data.items = userInv;
            await data.save();
        } else {
            userInv.push({ name: 'chicken', amount: deerAmount, description: '🐔 **Chicken**\nsell the chicken to make money.' });
            data.items = userInv;
            await data.save();
        }
        } else if (response == 'boar') {
        const deerAmount = Math.round(Math.random() * 1) + 1;
        const data = await bot.fetchUser(message.author.id);
        const EmbedBoar = new MessageEmbed()
        .setDescription(`${tick} **${member.user.username}** : You went hunting and came back with **${deerAmount}** x Boar 🐗`)
        .setColor("GREEN")
        message.channel.send(EmbedBoar);
        //message.channel.send(`You went hunting and came back with **${deerAmount}** x Boar 🐗`);
        const findItem = data.items.find(i => i.name.toLowerCase() == 'boar');
        let userInv = data.items.filter(i => i.name.toLowerCase() !== 'boar');
        if (findItem) {
            userInv.push({ name: 'boar', amount: (findItem.amount + deerAmount), description: '🐗 **Boar**\nsell boar to make money.' });
            data.items = userInv;
            await data.save();
        } else {
            userInv.push({ name: 'boar', amount: deerAmount, description: '🐗 **Boar**\nsell the boar to make money.' });
            data.items = userInv;
            await data.save();
        }
        } else if (response == 'missed') {
        const Embedmissed = new MessageEmbed()
        .setDescription(`${x} **${member.user.username}** : Avlanmaya gittin ve hiçbişey bulmadan geri geldin.`)
        .setColor("RED")
        message.channel.send(Embedmissed);
        }
}
module.exports.config = {
    name: 'hunt', // Command Name
    description: 'use your rifle to hunt for animals.', // Description
    usage: 'h hunt', // Usage
    botPerms: [], // Bot permissions needed to run command. Leave empty if nothing.
    userPerms: [], // User permissions needed to run command. Leave empty if nothing.
    aliases: ['avlan'], // Aliases 
    bankSpace: 5, // Amount of bank space to give when command is used.
    cooldown: 10// Command Cooldown
}