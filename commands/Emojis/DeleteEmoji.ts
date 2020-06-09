import * as Discord from 'discord.js'
const Akairo = require('discord-akairo');


class DeleteEmojiCommand extends Akairo.Command {
  constructor() {
    super('delete', {
      aliases: ['delete', 'd'],
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

  exec(message: Discord.Message, args: any) {

    message.channel.send(`Deleting ${args.name.url}`)
    args.name.delete();

  }
}

module.exports = DeleteEmojiCommand;