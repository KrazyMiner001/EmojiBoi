import * as Discord from 'discord.js'
const { Command } = require('discord-akairo');

class CreateEmojiCommand extends Command {
  constructor() {
    super('createemoji', {
      aliases: ['create', 'c'],
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

  exec(message: Discord.Message, args: any) {
    message.guild!.emojis.create(args.url, args.name)
      .then(emoji => message.react('👍') && message.react(`${emoji.identifier}`))
      .catch(console.error);
  }
}

module.exports = CreateEmojiCommand;