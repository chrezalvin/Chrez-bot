const Discord = require('discord.js');
const {help} = require('../assets/messages/help.json');

/**
 * @param {Discord.Client.message} message - treat message as discord message
 * @param {string} arguments - treat arguments as strings
 */


module.exports = {
    name: "help",
    description: "display help menu",
    execute(message, arguments){
        let myEmbed = {
            title: 'Chrez-Bot help menu',
            description: 'here are the list of command that\nChrez-Bot can use',
            fields: help,
            footer: {text: 'what is <index>? it is optional number to locate memes, quote, etc'}
            };

            return myEmbed;
    }
}