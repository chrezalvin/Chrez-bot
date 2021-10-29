const random = require('./getRandomValue.js');
const Story = require('../assets/messages/story.json').story; 
//console.log(Story[1].description);

const Discord = require('discord.js');
/**
 * @param {Discord.Client.message} message - treat message as discord message
 * @param {string} arguments - treat arguments as strings
 */

const myEmbed = new Discord.MessageEmbed()
.setColor('FFFF00');

module.exports = {
    name: "story",
    description: "tells a story",
    aliases: ["stories"],
    syntax: "Chrez story <index>",
    execute(message, args){
        let index = parseInt(args[0]);
        let num = random.execute(0, Story.length - 1); // generate random by default

        if(!isNaN(index))
        {
          if(index >= 0 && index < Story.length)
            num = index;
          else 
            throw (`index too many! the index is from ${0} to ${Story.length - 1}`);
        }

        let myStory = Story[num];
        myEmbed.setTitle(`${myStory.title} by ${myStory.author}`)
        .setDescription(myStory.description);
      
        return message.channel.send(myEmbed);
    }
}