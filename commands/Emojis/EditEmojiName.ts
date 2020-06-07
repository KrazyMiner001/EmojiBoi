import * as Discord from 'discord.js'
const Akairo = require('discord-akairo');

class DeleteEmojiCommand extends Akairo.Command {
    constructor() {
        super('renamemoji', {
            aliases: ['rename', 'r'],
            args: [
                {
                    id: 'emoji',
                    type: 'emoji',
                    default: null
                },
                {
                    id: 'name',
                    default: null
                },
            ]
        });
    }

    exec(message: Discord.Message, args: any) {
        message.channel.send(`Renaming ${args.emoji.name} to ${args.name}`)
        if (args.emoji.name = null) {
            message.channel.send("sorry but that emoji is invalid/is a default one.")
        } else {
            args.emoji.setName(args.name);
            message.channel.send('Done!')
        }
    }
}

module.exports = DeleteEmojiCommand;