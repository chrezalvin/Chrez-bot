/**
 * @param {string} errorMessage 
 */

const myEmbed = {
    title: `:warning:    error    :warning:`,
    footer: {
        text: `for command list, type Chrez help!`
    }
};

module.exports = {
    name: `error`,
    execute(errorMessage)
    {
        // if doesn't available in command
        if(errorMessage === undefined)
            return Object.assign(myEmbed, {description: `**your command is not available in Chrez command list!**`});

        else 
            return Object.assign(myEmbed, {description: errorMessage});
    }

};