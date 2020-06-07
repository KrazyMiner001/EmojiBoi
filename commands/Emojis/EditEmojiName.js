const Akairo = require('discord-akairo');

class DeleteEmojiCommand extends Akairo.Command {
    constructor() {
        super('renamemoji', {
            aliases: ['rename'],
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

    exec(message, args) {
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