const Discord = require('discord.js');
const Skill = require('../assets/messages/skill.json').skill;

module.exports = {
    name: "skill",
    execute(message, arguments){
        let level = parseInt(arguments[0]);
        if(isNaN(level) && !(level < 0 || level > 10)) 
            throw(`skill format is broken!`);

        let myEmbed = new Discord.MessageEmbed()
        .setColor('FFFF00')
        .setTitle(`${Skill.name} level ${level}`)
        .addFields(
            {name: `mp cost:`, value: `${Skill.mp}`, inline: true},
            {name: `type:`, value: `${Skill.Type}`, inline: true},
            {name: `skill multiplier:`, value: `${eval(Skill.base_multiplier.replace('[level]', level))}`, inline: true},
            {name: `skill constant:`, value: `${eval(Skill.base_constant.replace('[level]', level))}`, inline: true},
            {name: `hit count:`, value: `${Skill.hit_count}`, inline: true},
            {name: `inflict ailment`, value: `${Skill.ailment.type} (${Skill.ailment.chance[level]}%)`, inline: true},
            {name: `Skill Description:`, value: `${Skill.description}`, inline: false},
            {name: `info:`, value: `${Skill.additional.join('\n')}`, inline: false}
        );
        return message.channel.send(myEmbed);
    }
}