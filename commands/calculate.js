const { default: evaluatex } = require('evaluatex/dist/evaluatex');

/**
 * @param {Discord.Client.message} message
 * @param {Array<String>} arguments
 */

module.exports = {
    name: "calculate",
    description: "evaluates an expression",
    execute(message, arguments)
    {
        let expression = arguments.join('');
        if(expression === '')
            throw('no expression to be evaluated!');

        let result = evaluatex(expression)();
        return {title: 'calculates the expression', description: `${expression} = ${result}`};
    }
};