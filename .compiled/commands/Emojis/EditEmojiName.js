"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Akairo = require('discord-akairo');
class DeleteEmojiCommand extends Akairo.Command {
    constructor() {
        super('rename', {
            aliases: ['rename', 'r'],
            category: 'emojis',
            description: {
                text: 'Renames an emoji',
                usage: `rename [emoji to rename] [new name]`
            },
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
            ],
            clientPermissions: ['MANAGE_EMOJIS'],
            userPermissions: ['MANAGE_EMOJIS'],
        });
    }
    exec(message, args) {
        message.channel.send(`Renaming ${args.emoji.name} to ${args.name}`);
        if (args.emoji.name = null) {
            message.channel.send("sorry but that emoji is invalid/is a default one.");
        }
        else {
            args.emoji.setName(args.name);
            message.channel.send('Done!');
        }
    }
}
module.exports = DeleteEmojiCommand;
