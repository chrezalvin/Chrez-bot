const random = require('./getRandomValue.js');
const {greets} = require('../assets/messages/greet.json');

/**
 * @param {Discord.Client.message} message - treat message as discord message
 * @param {string} arguments - treat arguments as strings
 */

module.exports = {
    name: '',
    aliases: [], // brb -dad
    description: "greets people randomly",
    execute(message, arguments){
        let greet = greets[random.execute(0, greets.length)].replace("[name]", message.author.username);
        let myEmbed = {
            title: `Chrez Bot Greets ${message.author.username}`,
            description: greet
        };

        return myEmbed
    }
}