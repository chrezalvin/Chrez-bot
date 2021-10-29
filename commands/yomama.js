const random = require('./getRandomValue.js');

const {yomamas} = require('../assets/messages/yomama.json');

/**
 * @param {Discord.Client.message} message - treat message as discord message
 * @param {string} arguments - treat arguments as strings
 */

module.exports = {
    name: "yomama",
    aliases: ["yo", "mama"],
    description: "sends you a yo mama jokes",
    syntax: "Chrez yomama <index>",
    execute(message, arguments)
    {
        let index = parseInt(arguments[2]);
        let num = random.execute(0, yomamas.length - 1); // generate random by default

        if(!isNaN(index) && (index >= 0 && index < stories.length))
          num = index;
        
        return {title: `yo mama#${num}`, description: yomamas[num]};
    }

}