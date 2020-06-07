const { Command } = require('discord-akairo');
const { MessageAttachment } = require('discord.js');
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
    exec(message, args) {
        const attachment = new MessageAttachment(`${args.em.url}`);
        message.channel.send(attachment);
    }
}


module.exports = EnlargeCommand;