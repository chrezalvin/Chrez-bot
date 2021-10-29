const fs = require('fs');
const Discord = require('discord.js');
const random = require('./getRandomValue.js');

const memes = fs.readdirSync('./assets/images/meme/');

/**
 * @param {Discord.Client.message} message - treat message as discord message
 * @param {string} arguments - treat arguments as strings
 * */

module.exports = {
    name: "meme",
    name: "memes",
    aliases: ["memes"],
    description: "sends you a meme",
    syntax: "Chrez meme <index>",
    execute(message, arguments)
    {
        let index = parseInt(arguments[0]);
        let num = random.execute(0, memes.length);

        if(!isNaN(index))
        {
          if(index >= 0 && index < memes.length)
            num = index;
          else 
            throw (`index too many! the index is from ${0} to ${memes.length - 1}`);
        }

        return new Discord.MessageEmbed()
          .attachFiles(new Discord.MessageAttachment(`./assets/images/meme/${memes[num]}`, 'memes.jpg'))
          .setTitle(`memes #${num}`)
          .setImage(`attachment://memes.jpg`);
    }
}