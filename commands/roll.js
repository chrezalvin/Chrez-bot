const random = require('./getRandomValue');

/**
 * @param {Array} arguments
 */

module.exports = {
    name: "roll",
    description: "rolls 0 - number if defined, rolls a die otherwise",
    execute(message, arguments){
        
        // check if argument[0] is valid
        let max = parseInt(arguments.shift());
        if(isNaN(max))
            max = 6;
        
        if(max == 6)
            return {
                title: `Rolls a die`, 
                description: `i rolled a die and got ${random.execute(0, max)}`
            };
        else
            return {
                title: `Chrez roll 0 - ${max}`,
                description: `I rolled a ${random.execute(0, max)}!`
            };
    }
}