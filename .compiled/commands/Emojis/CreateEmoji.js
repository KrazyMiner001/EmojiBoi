"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const { Command } = require('discord-akairo');
class CreateEmojiCommand extends Command {
    constructor() {
        super('create', {
            aliases: ['create', 'c'],
            category: 'emojis',
            description: {
                text: 'Create an emoji',
                usage: `create [emoji name] [emoji url]`
            },
            args: [
                {
                    id: 'name',
                    default: null
                },
                {
                    id: 'url',
                    default: null
                }
            ],
            clientPermissions: ['MANAGE_EMOJIS'],
            userPermissions: ['MANAGE_EMOJIS'],
        });
    }
    exec(message, args) {
        message.guild.emojis.create(args.url, args.name)
            .then(emoji => message.react('<:Successful:720277752824987680>') && message.react(`${emoji.identifier}`))
            .catch(console.error);
    }
}
module.exports = CreateEmojiCommand;
