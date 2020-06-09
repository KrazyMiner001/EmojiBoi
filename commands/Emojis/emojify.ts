import * as Discord from 'discord.js'
const Akairo = require('discord-akairo');


class EmojifyCommand extends Akairo.Command {
  constructor() {
    super('emojify', {
      aliases: ['emojify', 'makeemojis', 'efy'],
      description: {
        text: 'makes text emojis',
        usage: `emojify [text] //please note that all spaces must be _`
      },
      args: [
        {
          id: 'thingtoemojify',
        },
      ],
    });
  }

  exec(message: Discord.Message, args: any) {
    let text = args.thingtoemojify.replace('_', ' ')
    let emojifiedText;
    for (var i = 0; i < text.length; i++) {
      if (text.charAt(i) != ' ') {
        emojifiedText = emojifiedText + `:regional_indicator_${(text.charAt(i))}:`;
      } else {
        emojifiedText = emojifiedText + '  ';
      }
    }
    message.channel.send(emojifiedText)
  }
}


module.exports = EmojifyCommand;