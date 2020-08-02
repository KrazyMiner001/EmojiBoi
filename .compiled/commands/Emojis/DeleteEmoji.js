"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Akairo = require('discord-akairo');
class DeleteEmojiCommand extends Akairo.Command {
    constructor() {
        super('delete', {
            aliases: ['delete', 'd'],
            category: 'emojis',
            description: {
                text: 'Deletes an emoji',
                usage: `delete [emoji to delete]`
            },
            args: [
                {
                    id: 'name',
                    type: 'emoji',
                    default: null
                },
            ],
            clientPermissions: ['MANAGE_EMOJIS'],
            userPermissions: ['MANAGE_EMOJIS'],
        });
    }
    exec(message, args) {
        message.channel.send(`Deleting ${args.name.url}`);
        args.name.delete();
    }
}
module.exports = DeleteEmojiCommand;
