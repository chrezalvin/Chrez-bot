const random = require('./getRandomValue.js');
const {pewpew} = require('../assets/messages/pewpew.json');

/** 
 * @param {Discord.Client.message} message
*/

module.exports = {
    name: "pewpew",
    execute(message)
    {
        return {title: pewpew[random.execute(0, pewpew.length)]};
    }
}