
const { Command } = require('discord-akairo');
import * as Discord from 'discord.js'
class InviteCommand extends Command {
  constructor() {
    super('invite', {
      aliases: ['inv', 'invite'],
      description: {
        text: 'Gets the invite',
        usage: `invite`
      },


    });
  }

  exec(message: Discord.Message) {
    message.channel.send('https://discordapp.com/oauth2/authorize?client_id=718471280914858015&scope=bot&permissions=1074261072');
  }
}
module.exports = InviteCommand;