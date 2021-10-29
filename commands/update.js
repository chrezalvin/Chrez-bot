const {version, news} = require('../assets/messages/update.json');

module.exports = {
    name: "update",
    aliases: [],
    description: "sends you an update text",
    syntax: "Chrez update",
    execute(message, arguments)
    {
        let myEmbed = { title: `ChrezBot version ${version} is available!`,
                        description: news.join('\n'),
                        footer:{
                           text: `For more help, type 'Chrez help'`
                        }
                    };

        return myEmbed;
    }

}