import * as Discord from 'discord.js'
const { Command } = require('discord-akairo');

class CreateEmojiCommand extends Command {
  constructor() {
    super('createemoji', {
      aliases: ['create', 'c'],
      args: [
        {
          id: 'name',
          default: null
        },
        {
          id: 'url',
          default: null
        }
      ]
    });
  }

  exec(message: Discord.Message, args: any) {
    message.guild!.emojis.create(args.url, args.name)
      .then(emoji => message.react('👍') && message.react(`${emoji.identifier}`))
      .catch(console.error);
  }
}

module.exports = CreateEmojiCommand;