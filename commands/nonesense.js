const fs = require('fs');
const Discord = require('discord.js');
const random = require('./getRandomValue');

//const nonesense = fs.readFileSync('./assets/messages/nonesense/txt', 'utf-8').split;

/**
 * @param {Discord.Client.message} message
 * @param {Array} arguments
 */

module.exports = {
    name: "nonesense",
    execute(message, arguments)
    {
        message.channel.send()
    }
}