const {quote} = require('../assets/messages/quote.json');
const Random = require('./getRandomValue');

/**
 * @param {Discord.Client.message} message
 * @param {Array<String>} arguments
*/

module.exports = {
    name: "quote",
    description: "Sends you a quote from people",
    execute(message, arguments)
    {
        let random = Random.execute(0, quote.length - 1);
        let index = parseInt(arguments[0]);
        if(!isNaN(index)){
             if(index >= 0 && index < quote.length)
                random = index;
             else
                throw(`too many index! Index must be from 0 to ${quote.length - 1}`);
        }

        let {author, description} = quote[random];
        let myEmbed = {
            title: `Quote #${random}`,
            description: `\`${description}\``,
            footer:{
                text: `Quote made by ${author}`
            }
        };
        return myEmbed;
    }
}