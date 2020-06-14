import * as Discord from 'discord.js'
const Akairo = require('discord-akairo');


class EmojifyCommand extends Akairo.Command {
  constructor() {
    super('emojify', {
      aliases: ['emojify', 'makeemojis', 'efy'],
      category: 'emojis',
      description: {
        text: 'makes text emojis',
        usage: `emojify //it'll give you a prompt`
      },
      args: [
        {
          id: 'thingtoemojify',

          match: 'content',
        },

      ],
      clientPermissions: ['SEND_MESSAGES'],
      userPermissions: ['SEND_MESSAGES'],
    });
  }

  exec(message: Discord.Message, args: any) {
    let text: string = args.thingtoemojify.replace('_', ' ')
    text = text.toLowerCase();
    let emojifiedText = "";
    for (var i = 0; i < text.length; i++) {
      if (text.charAt(i) != ' ') {
        emojifiedText = emojifiedText + `:regional_indicator_${(text.charAt(i))}: `;
      } else {
        emojifiedText = emojifiedText + '  ';
      }
    }
    message.channel.send(emojifiedText)
  }
}


module.exports = EmojifyCommand;