const {version} = require('../assets/messages/update.json');

/**
 * @param {Discord.Client.message} message
 * @param {Array} arguments
 */

module.exports = {
    name: "check",
    execute(message, arguments)
    {
        let myEmbed = {
            title: `Chrez Check`,
            description: `Bot ready!, version ${version}`
        };
        return myEmbed;
    }
};