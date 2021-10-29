const express = require('express'); // express lib for linking
const app = express();
const port = 3000;

app.get('/', (req, res) => res.send('Hello World!'));

app.listen(port, () => console.log(`Example app listening at http://localhost:${port}`));

// ============ MY CODE =================
const Discord = require('discord.js');
const embedStyle = require('./embedStyle.json');

const CronJob = require('cron').CronJob; // cron for scheduled messages
const {channelList, scheduledMessage} = require('./schedulerMessage.json');

const client = new Discord.Client;
client.commands = new Discord.Collection;
//client.aliases = new Discord.Collection;

const fs = require('fs');

const {prefix, token} = require('./config.json'); // this token leads to ChrezBotTest

const commandFiles = fs.readdirSync('./commands').filter(file => file.endsWith('.js'));

for(const file of commandFiles)
{
    const command = require(`./commands/${file}`);
    
    client.commands.set(command.name, command);
}

client.once('ready', () => {
    console.log(`ready!`);
});

new CronJob('00 05 * * *', () => {
    const channel = client.channels.cache.get('739696962097512452');
    const myEmbed = {
        color: embedStyle.color,
        title: scheduledMessage.title,
        description: scheduledMessage.description.join('\n'),
        footer: scheduledMessage.footer
    };
    console.log(channel);
    channel.send({embed: myEmbed});
}, null, true, 'Japan').start();

/*client.once('ready', ()=>{
  client.channel.cache.get('739696962097512452').send({embed: {title: `agreed!`,
    description: `chrez bot is 100% agree with Chrez's statement`
  }});
});*/

client.on('message', message => {
    console.log(message.content);

    // skip the proccess if the prefix isn't what we wanted or it's from the bot
    if(message.author.bot) return;

    if(message.content === 'pewpew') {
        myEmbed = Object.assign(client.commands.get('pewpew').execute(message), embedStyle);
        message.channel.send({embed: myEmbed});
        return;
    }

    if(message.content.startsWith(prefix))
    {
        // remove the prefix and get only the arguments
        let arguments = message.content.slice(prefix.length).trim().split(/ +/);

        // the first argument is our command
        let command = arguments.shift().toLowerCase();
        
        if(!client.commands.has(command)) { 
            // this is the case if user input a wrong command ex: Chrez abudasoa
            let myEmbed = Object.assign(client.commands.get('error').execute(), embedStyle);
            message.channel.send({embed: myEmbed}); 
            return;
        }

        try
        {
            let myEmbed = Object.assign(client.commands.get(command).execute(message, arguments), embedStyle);
            message.channel.send({embed: myEmbed});
        }
        catch(error)
        {
            let myEmbed = Object.assign(client.commands.get('error').execute(error), embedStyle);
            message.channel.send({embed: myEmbed});
        }
    }
});

client.login(token);