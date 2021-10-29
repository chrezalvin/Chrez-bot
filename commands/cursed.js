const fs = require('fs');
const Discord = require('discord.js');
const random = require('./getRandomValue.js');

var cursed = fs.readdirSync('./assets/images/cursed');

/**
 * @param {Discord.Client.message} message - treat message as discord message
 * @param {string} arguments - treat arguments as strings
 */

module.exports = {
    name: "cursed",
    description: "sends you a really cursed image",
    syntax: "Chrez cursed <index>",
    execute(message, arguments)
    {
        let index = parseInt(arguments[0]);
        let num = random.execute(0, cursed.length); // generate random by default

        if(!isNaN(index))
        {
          if(index >= 0 && index < cursed.length)
            num = index;
          else 
            throw (`index too many! the index is from ${0} to ${cursed.length - 1}`);
        }

        return new Discord.MessageEmbed()
        .attachFiles(new Discord.MessageAttachment(`./assets/images/cursed/${cursed[num]}`, 'cursed.jpg'))
        .setTitle(`cursed #${num}`)
        .setImage(`attachment://cursed.jpg`);
    }
}