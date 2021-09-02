const legfish = ':fish:'
const array = [{
    name: 'kurabiye',
    description: 'Güzel bir kurabiye',
    canUse: true,
    canBuy: true,
    displayOnShop: true,
    sellAmount: 10,
    price: 50,
    keep: false,
    run: async (bot, message, args) => {
        const cookieRandom = [
            'Hiç güzel olmamış.',

        ];
        const yes = cookieRandom[Math.floor(Math.random() * cookieRandom.length)];
        message.channel.send(`${yes}`);
    }
},
{
    name: 'padlock',
    description: 'Cebindeki paralar bidaha çalınmasın!!',
    canUse: false,
    canBuy: true,
    displayOnShop: true,
    sellAmount: 1500,
    price: 2500,
    keep: true,
    run: async (bot, message, args) => {

    }
},

{
    name: 'silah',
    description: `:gun: **Silah**\nBununla hayvanları ördülebilirsin.`,
    canUse: false,
    canBuy: true,
    displayOnShop: true,
    sellAmount: 10000,
    price: 25000,
    keep: true,
    run: async (bot, message, args) => {

    }
},
{
    name: 'geyik',
    description: '🦌 **Geyik**\nGeyiğini satarak para kazanabilirsin.',
    canUse: false,
    canBuy: false,
    displayOnShop: false,
    sellAmount: 250,
    price: 0,
    keep: true,
    run: async (bot, message, args) => {

    }
},
{
    name: 'ayi',
    description: '🐻 **Ayı**\nSatarak para kazanabilirsin.',
    canUse: false,
    canBuy: false,
    displayOnShop: false,
    sellAmount: 650,
    price: 0,
    keep: true,
    run: async (bot, message, args) => {

    }
},
{
    name: 'ordek',
    description: '🦆 **Ördek**\nSatarak para kazan.',
    canUse: false,
    canBuy: false,
    displayOnShop: false,
    sellAmount: 1000,
    price: 0,
    keep: true,
    run: async (bot, message, args) => {

    }
},
{
    name: 'domuz',
    description: '🐷 **Domuz**\nsatarak para kazan.',
    canUse: false,
    canBuy: false,
    displayOnShop: false,
    sellAmount: 5,
    price: 0,
    keep: true,
    run: async (bot, message, args) => {

    }
},
{
    name: 'inek',
    description: '🐮 **İnek**\nSat para kas.',
    canUse: false,
    canBuy: false,
    displayOnShop: false,
    sellAmount: 450,
    price: 0,
    keep: true,
    run: async (bot, message, args) => {

    }
},
{
    name: 'tilki',
    description: '🦊 **Fox**\nsatarak para kazan..',
    canUse: false,
    canBuy: false,
    displayOnShop: false,
    sellAmount: 300,
    price: 0,
    keep: true,
    run: async (bot, message, args) => {

    }
},
{
    name: 'tavsan',
    description: '🐰 **tavsan**\nsatarak para kazan.',
    canUse: false,
    canBuy: false,
    displayOnShop: false,
    sellAmount: 300,
    price: 0,
    keep: true,
    run: async (bot, message, args) => {

    }
},

{
    name: 'safir',
    description: '💎 **safir**\ninsanlara zenginliğini göster!.',
    canUse: false,
    canBuy: true,
    displayOnShop: true,
    sellAmount: 95000,
    price: 100000,
    keep: true,
    run: async (bot, message, args) => {

    }
},

{
    name: 'balta',
    description: `:axe: **Balta**\nBununla ağaç kesebilirsin.`,
    canUse: true,
    canBuy: true,
    displayOnShop: true,
    sellAmount: 1200,
    price: 2500,
    keep: true,
    run: async (bot, message, args) => {
        const treeAmount = Math.round(Math.random() * 1) + 1;
        const data = await bot.fetchUser(message.author.id);
        message.channel.send(`Ormana gittin ve **${treeAmount}** tane ağaç kesip geri geldin! 🌲`);
        const findItem = data.items.find(i => i.name.toLowerCase() == 'agac');
        let userInv = data.items.filter(i => i.name.toLowerCase() !== 'agac');
        if (findItem) {
            userInv.push({ name: 'agac', amount: (findItem.amount + treeAmount), description: '🌲 **Ağaç**\nSatarak para kazanabilirsin.' });
            data.items = userInv;
            await data.save();
        } else {
            userInv.push({ name: 'agac', amount: treeAmount, description: '🌲 **Ağaç**\nSatarak para kazanabilirsin.' });
            data.items = userInv;
            await data.save();
        }
    }
},

{
    name: 'agac',
    description: '🌲 **Ağaç**\nSatarak para kazanabilirsin.',
    canUse: false,
    canBuy: false,
    displayOnShop: false,
    sellAmount: 500,
    price: 0,
    keep: true,
    run: async (bot, message, args) => {

    }
}


];

module.exports = array;
