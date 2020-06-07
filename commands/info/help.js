
const { Command } = require('discord-akairo');
const { MessageEmbed } = require('discord.js');
const config = require('../../config.json')
class PingCommand extends Command {
    constructor() {
        super('help', {
            aliases: ['h', 'help']
        });
    }

    exec(message) {
        message.channel.send(`Helping...`).then(msg => {
            const _ = new MessageEmbed()
                .setTitle("Here's your help!")
                .setDescription(
                    `\`${config.prefix}help\` - Shows this message - Aliases: help, h\n
                    \`${config.prefix}ping\` - Gets the latency\n
                     \`${config.prefix}create [EmojiName] [EmojiURL]\` - creates and emoji\n
                     \`${config.prefix}delete [Emoji]\` - Deletes emoji\n
                     \`${config.prefix}rename [Emoji] [NewName]\` - changes an emoji's name\n
                     \`${config.prefix}emojis\` - Shows how many emojis there are on a server\n
                     \`${config.prefix}enlarge [Emoji]\` - Enlarges emoji\n
                     \`${config.prefix}prefix [New Prefix]\` - Sets a custom prefix
                     `
                )
                .setColor(`#00FF00`);
            message.channel.send(_)

        })


    }
}

module.exports = PingCommand;