const { Command } = require('discord-akairo');
import * as Discord from 'discord.js'

class EnlargeCommand extends Command {
    constructor() {
        super('enlargeemoji', {
            aliases: ['enlarge'],
            args: [
                {
                    id: 'em',
                    type: 'emoji',
                    default: null
                },
            ]
        });
    }
    exec(message: Discord.Message, args: any) {
        const attachment = new Discord.MessageAttachment(`${args.em.url}`);
        message.channel.send(attachment);
    }
}


module.exports = EnlargeCommand;