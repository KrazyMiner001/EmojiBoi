const { Command } = require('discord-akairo');
import * as Discord from 'discord.js'

class EnlargeCommand extends Command {
    constructor() {
        super('enlarge', {
            aliases: ['enlarge'],
            description: {
                text: 'Enlarges a emoji',
                usage: `enlarge [emoji to enlarge]`
            },
            args: [
                {
                    id: 'em',
                    type: 'emoji',
                    default: null
                },
            ],
            clientPermissions: ['MANAGE_EMOJIS'],
            userPermissions: ['MANAGE_EMOJIS'],
        });
    }
    exec(message: Discord.Message, args: any) {
        const attachment = new Discord.MessageAttachment(`${args.em.url}`);
        message.channel.send(attachment);
    }
}


module.exports = EnlargeCommand;