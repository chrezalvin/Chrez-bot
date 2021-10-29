const client = new require('discord.js').Client;
const Canvas = require('canvas');

/**
 * @param {client.message} message
 * @param {Array<String>} arguments
 */

module.exports = {
    name: "quotify",
    description: "quote the last message",
    async execute(message, arguments)
    {
        const messages = await message.channel.messages.fetch({limit: 2});
        
        const lastMessage = messages.last();
        console.log(messages);

        const myEmbed = new Discord.MessageEmbed()
            .setColor('FFFF00')
            .setAuthor(`${lastMessage.author.username} once said:`, lastMessage.author.avatarURL())
            .setTitle(lastMessage.content);
        /*
        const canvas = Canvas.createCanvas(700, 250);
        const context = canvas.getContext('2d');
        
        const background = await Canvas.loadImage('./wallpaper.jpg');
        const avatarImg = await Canvas.loadImage(message.author.avatarURL({format: 'jpg'}));

        context.drawImage(avatarImg, 0, 0, canvas.width, canvas.height);
        // context.drawImage(avatarImg, 0, 0, 50, 50);

        const attachment = new Discord.MessageAttachment(canvas.toBuffer(), 'test-image.png');
        */
        message.channel.send(myEmbed);
    }
}