const { MessageEmbed, Message } = require('discord.js');
const i = '🎆'
const x = '🎈'
const tick = '✨'
const s = '✨'
module.exports.run = async (bot, message, args) => {
    const usertag = message.member;
    const user = await bot.fetchUser(message.author.id);
    const member = message.mentions.members.first() || message.guild.members.cache.get(args.join(' ')) || message.guild.members.cache.find(member => member.user.username.toLowerCase() === args.join(' ').toString().toLowerCase());
  
  
    let passivewarn = new MessageEmbed()
    .setColor("RED")
    .setDescription(`${x} **${usertag.user.username}** : You have \`PASSIVE\` enabled, your reqired to disable it to use this command.`);
  
    if (user.passive == true) return message.channel.send(passivewarn);
  
    if (!member) {
      
    let rob1embed = new MessageEmbed()
    .setColor("RED")
    .setDescription(`${x} **${usertag.user.username}** : Kim, niye nasıl, kimi nasıl neden.`);
    return message.channel.send(rob1embed);
    //return message.channel.send("You think you can rob nobody?");
      
    }
    const devs = ['404205935251292160'];

    if (devs.includes(member.user.id)) {
      
    let rob2embed = new MessageEmbed()
    .setColor("BLUE")
    .setDescription(`${s} **${usertag.user.username}** : Kişi parasını seviyor baya XD`);
    return message.channel.send(rob2embed);
      //return message.channel.send(`You can't rob the bot devs lol.`);
    }
    
    const robbedUser = await bot.fetchUser(member.id);
    if (robbedUser.passive == true) {
      
    let rob3embed = new MessageEmbed()
    .setColor("RED")
    .setDescription(`${x} **${usertag.user.username}** : The user you tried to rob has passive \`ENABLED\`.`);
    return message.channel.send(rob3embed);
      //return message.channel.send(`Leave them alone... they are in passive mode`);
    }
    if (robbedUser.coinsInWallet < 1000) {
    let rob4embed = new MessageEmbed()
    .setColor("BLUE")
    .setDescription(`${s} **${usertag.user.username}** : Kişinin 1000tl den daha az parası olduğu için şu anlık ondan çalamazsın!`);
    return message.channel.send(rob4embed);
        //return message.channel.send("This user doesn't have much coins, I wouldn't rob them");
    }
    if (user.items.find(x => x.name == 'luckyclover')) {
        const newInv = user.items.filter(i => i.name != 'luckyclover');
        const bypass = user.items.find(i => i.name == 'luckyclover');
        if (bypass.amount == 1) {
            user.items = newInv;
        } else {
            newInv.push({ name: 'luckyclover', amount: bypass.amount - 1, description: bypass.description });
            user.items = newInv
        }
    } else {
        const random = Math.floor(Math.random() * 5);
        if (random === 3) {
              let rob5embed = new MessageEmbed()
              .setColor("BLUE")
              .setDescription(`${s} **${usertag.user.username}** : Hey, sen! **${member.user.tag}** kişisinden çalarken yakalandın 👮! Sonra bidaha dene.`);
              return message.channel.send(rob5embed);
            //return message.channel.send(`You tried to rob **${member.user.tag}** but got caught👮! Better luck next time.`);
        }
    }
    let array = robbedUser.items.filter(x => x.name !== 'padlock');
    const padlock = robbedUser.items.find(x => x.name === 'padlock');
    if (padlock) {
      
              let rob6embed = new MessageEmbed()
              .setColor("BLUE")
              .setDescription(`${s} **${usertag.user.username}** : Hmm, **${member.user.tag}**ı soymaya çalıştın fakat kendisinde **Padlock**🔒 eşyası bulunuyor, başarısız oldun.`);
              message.channel.send(rob6embed);
        //message.channel.send(`You tried to rob **${member.user.tag}**, but they had a **Padlock**🔒. Try again next time.`);
      
        if (padlock.amount === 1) {
            robbedUser.items = array;
            await robbedUser.save();
            return;
        }
        else {
            array.push({
                name: 'padlock',
                amount: padlock.amount - 1,
                description: padlock.description
            });
            robbedUser.items = array;
            await robbedUser.save();
            return;
        }
    }
    const randomAmount = Math.round(Math.random() * robbedUser.coinsInWallet);
    user.coinsInWallet += randomAmount;
    robbedUser.coinsInWallet -= randomAmount;
    await user.save();
    await robbedUser.save();
  
              let rob6embed = new MessageEmbed()
              .setColor("GREEN")
              .setDescription(`:moneybag:  **${usertag.user.username}** : **${randomAmount.toLocaleString()}** tl çaldın ${member}!`);
              message.channel.send(rob6embed);
  
    //message.channel.send(`:moneybag: You stole **${randomAmount.toLocaleString()}** coins from ${member}!`);

}

module.exports.config = {
    name: 'rob', // Command Name
    description: 'steal someones money and get rich.', // Description
    usage: 'h rob <user>', // Usage
    botPerms: [], // Bot permissions needed to run command. Leave empty if nothing.
    userPerms: [], // User permissions needed to run command. Leave empty if nothing.
    aliases: ['çal'], // Aliases 
    bankSpace: 5, // Amount of bank space to give when command is used.
    cooldown: 300 // Command Cooldown
}
