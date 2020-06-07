const Akairo = require('discord-akairo');

class DeleteEmojiCommand extends Akairo.Command {
  constructor() {
    super('deletemoji', {
      aliases: ['delete'],
      args: [
        {
          id: 'name',
          type: 'emoji',
          default: null
        },
      ]
    });
  }

  exec(message, args) {
    if (args.emoji.url = null) {
      message.channel.send("sorry but that emoji is invalid/is a default one.")
    } else {
      message.channel.send(`Deleting ${args.name.url}`)
      args.name.delete();
    }
  }
}

module.exports = DeleteEmojiCommand;