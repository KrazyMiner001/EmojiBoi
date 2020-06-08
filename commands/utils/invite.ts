
const { Command } = require('discord-akairo');
const config = require('../../config.json')
var guildConf = require('../../storages/guildConf.json');
const fs = require('fs');
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
    message.channel.send('https://discordapp.com/oauth2/authorize?client_id=718471280914858015&scope=bot&permissions=8');
  }
}
module.exports = InviteCommand;