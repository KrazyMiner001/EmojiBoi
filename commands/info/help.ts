
const { Command } = require('discord-akairo');
import * as Discord from 'discord.js'
const config = require('../../config.json')
class PingCommand extends Command {
    constructor() {
        super('help', {
            aliases: ['h', 'help']
        });
    }

    exec(message: Discord.Message) {
        message.channel.send(`Helping...`).then(() => {
            const _ = new Discord.MessageEmbed()
                .setTitle("Here's your help!")
                .setDescription(
                    `\`${config.prefix}help\` - Shows this message - Aliases: help, h\n
                    \`${config.prefix}ping\` - Gets the latency - Aliases: ping, p\n
                     \`${config.prefix}create [EmojiName] [EmojiURL]\` - creates and emoji - Aliases: create, c\n
                     \`${config.prefix}delete [Emoji]\` - Deletes emoji - Aliases: delete, d\n
                     \`${config.prefix}rename [Emoji] [NewName]\` - changes an emoji's name - Aliases: rename, r\n
                     \`${config.prefix}emojis\` - Shows how many emojis there are on a server - Aliases: emojis, hm\n
                     \`${config.prefix}enlarge [Emoji]\` - Enlarges emoji - Aliases: enlarge, e\n
                     \`${config.prefix}prefix [New Prefix]\` - Sets a custom prefix, the cooldown is 30 minutes - Aliases: prefix, pf
                     `
                )
                .setColor(`#00FF00`);
            message.channel.send(_)

        })


    }
}

module.exports = PingCommand;