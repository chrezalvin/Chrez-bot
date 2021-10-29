const Discord = require('discord.js');
const random = require('./getRandomValue.js');
const Pewpew = require('../assets/messages/pewpew.json').pewpew;

const myEmbed = new Discord.MessageEmbed()
    .setColor('#FFFF00');

/** 
 * @param {Discord.Client.message} message
*/

module.exports = {
    name: "pewpew",
    execute(message)
    {
        myEmbed.setTitle(Pewpew[random.execute(0, pewpew.length)]);
        message.channel.send(myEmbed);
    }
}